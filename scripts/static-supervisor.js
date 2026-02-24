import { execSync } from "child_process";
import fs from "fs";
import "./static-server.js";
import { startGitPoll } from "./git-poll.js";

const BRANCH = process.env.PREVIEW_BRANCH || "main";
const REPO_URL = process.env.REPO_URL;

if (!REPO_URL) {
  throw new Error("REPO_URL env var is required for static preview");
}

process.chdir("/app"); // 🔑 FORCE cwd

console.log("[supervisor] ensuring git repo");

const run = (cmd) => execSync(cmd, { stdio: "inherit", cwd: "/app" });

if (!fs.existsSync(".git")) {
  run("git init");
  run(`git remote add origin ${REPO_URL}`);
} else {
  const remotes = execSync("git remote", { cwd: "/app" }).toString();
  if (!remotes.split("\n").includes("origin")) {
    run(`git remote add origin ${REPO_URL}`);
  }
}

run("git fetch origin --depth=1");
run(`git reset --hard origin/${BRANCH}`);
run("git clean -fd");

console.log("[supervisor] static preview running");

// 🔑 start polling ONLY after git is ready
startGitPoll();
