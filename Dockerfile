FROM node:16.13.1 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16.13.1 as production

ARG REDIS_HOST=''
ENV REDIS_HOST=${REDIS_HOST}

ARG REDIS_PORT=''
ENV REDIS_PORT=${REDIS_PORT}

ARG REDIS_AUTH_PASS=''
ENV REDIS_AUTH_PASS=${REDIS_AUTH_PASS}

ARG MONGO_URL=''
ENV MONGO_URL=${MONGO_URL}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]