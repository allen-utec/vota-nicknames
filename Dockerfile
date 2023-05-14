FROM node:lts-alpine
WORKDIR /app

COPY . .
RUN npm install

EXPOSE 9090

CMD ["npm", "start"]