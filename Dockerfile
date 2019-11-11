FROM node:13-slim

RUN mkdir /app

WORKDIR /app

COPY Dockerfile .

COPY package.json .

RUN yarn

COPY . .

CMD [ "yarn", "start" ]

