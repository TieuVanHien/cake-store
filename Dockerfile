# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
COPY ./app /app/
COPY ./app/pages ./pages
RUN npm install --production
CMD ["node", "/app/pages/index.js"]
EXPOSE 3000