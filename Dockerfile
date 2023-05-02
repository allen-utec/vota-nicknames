FROM node:lts-alpine as builder
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app .
COPY index.js .
CMD ["npm", "start"]