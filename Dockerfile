# syntax=docker/dockerfile:1

FROM node:18-alpine
RUN apk add --no-cache bash # Required for pnpm
WORKDIR /app
RUN npm install -g pnpm && pnpm install --prod -r /app/package.json
COPY . .
RUN pnpm install -g pnpm && pnpm install --prod
RUN pnpx babel --ignore "node_modules/**" --out-dir dist --copy-files app
CMD ["node", "app/pages/index.js"]
EXPOSE 3000
