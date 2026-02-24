FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /app
COPY . .

ENV PORT=8080
EXPOSE 8080

CMD ["node", "scripts/static-supervisor.js"]
