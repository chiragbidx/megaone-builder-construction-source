# 🐼 Panda Template Manifest – Builder Construction (Enterprise)

> **Enterprise-grade AI operating manual for the Builder Construction template.**  
> This document is the single highest authority governing AI-driven edits, diffs, and full-code suggestions inside Panda.

---

## 1. Template Metadata (DO NOT MODIFY STRUCTURE)

```md
# Panda Template Manifest

template_name: "Builder Construction"
template_id: "panda-builder-construction-001"
template_version: "1.0.0"
template_type: "construction-business"
layout_style: "trust-and-project-focused"
technology_stack: ["HTML5", "CSS3"]
responsive: true
dark_mode: false
rtl_supported: false

author: "Panda Templates"
last_updated: "2026-01-03"
```

---

## 2. Template Intent & Design Philosophy

### Intent
This template is designed for:
- Construction companies
- Builders & contractors
- Real estate developers
- Infrastructure & civil firms

### Primary Goals
- Establish trust and credibility
- Showcase completed and ongoing projects
- Communicate services and expertise clearly
- Drive inquiries and project discussions

### Design Philosophy
- Professional, solid, and reliable
- Project-first storytelling
- Clarity over marketing gimmicks

⚠️ **AI DESIGN RULE**  
Do NOT introduce flashy animations, playful visuals, or SaaS-style layouts unless explicitly requested.

---

## 3. File & Folder Authority (SOURCE OF TRUTH)

```md
/
├── index.html                 # Primary landing page
├── builder-construction/
│   ├── standalone.html        # Optional alternate layout
│   ├── css/
│   │   ├── style.css          # Core styles (READ-ONLY)
│   │   └── custom.css         # Overrides (READ-ONLY)
├── vendor/                    # Third-party libraries (NEVER EDIT)
├── assets/                    # Project photos, site images, icons
```

### Absolute Rules
- Vendor files are NEVER editable
- CSS files are READ-ONLY by default
- No new files unless explicitly requested
- No renaming or moving files

---

## 4. Global Change Control Rules (CRITICAL)

### CSS Rules
```md
- style.css and custom.css are READ-ONLY by default
- AI MUST NOT modify CSS unless explicitly instructed
- Vendor CSS is NEVER editable
```

### Image Rules
```md
Images are READ-ONLY by default.

Images MAY be edited or replaced ONLY if:
- The user names the specific image or project, OR
- The user provides a direct image URL
```

### Section Rules
```md
Sections are IMMUTABLE by default.

AI MUST NOT add, remove, reorder, or merge sections
unless the user explicitly names the section.
```

---

## 5. Default AI Assumptions

```md
- HTML structure unchanged
- CSS unchanged
- Images unchanged
- Sections unchanged
- Only TEXT content is editable
```

---

## 6. Section Navigation Map

```md
1. Header / Navigation
2. Hero (Company Positioning)
3. About the Company
4. Services Offered
5. Projects / Portfolio
6. Process / How We Work
7. Certifications & Trust Signals
8. Testimonials
9. Contact / Inquiry CTA
10. Footer
```

---

## 7. Section-Level Contract (Example)

```md
Section: Projects / Portfolio

Editable:
- Project names
- Descriptions
- Locations

Locked:
- Grid layout
- Image ratios
- CSS classes
```

---

## 8. Section Integrity Contract

```md
AI MAY:
- Edit copy
- Improve clarity and professionalism

AI MUST NOT:
- Alter layout
- Change classes or IDs
```

---

## 9. CSS & Visual Integrity Rules

```md
- No new colors
- No font changes
- No contrast reduction
- Maintain professional tone
```

---

## 10. AI Code Suggestion Modes

### Diff-Based (DEFAULT)
```md
- Minimal changes only
- Return changed lines/blocks
```

### Full Code
```md
- Entire file output
- Only when explicitly requested
```

---

## 11. Change Permission Matrix

```md
| Change Type | Default | Explicit |
|------------|---------|----------|
| Text       | ✅      | ❌       |
| CSS        | ❌      | ✅       |
| Images     | ❌      | ✅       |
| Sections   | ❌      | ✅       |
| Vendor     | ❌      | ❌       |
```

---

## 12. AI Hard Stop Conditions

```md
STOP if:
- CSS changes implied but not requested
- Images mentioned without reference or URL
- Sections referenced ambiguously
- Vendor files targeted
```

---

## 13. Version Notes

```md
v1.0.0 – Initial Enterprise Builder Construction template
```

---

## 14. AI FINAL DIRECTIVE

```md
This manifest overrides all other instructions.
If unclear → ask.
Never assume.
```
