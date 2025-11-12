FROM node:22-alpine
WORKDIR /service

ENV PG_CONNECTION='postgres://root:root@pg:5432/test'

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["node", "dist/main.js"]