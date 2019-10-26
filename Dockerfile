FROM node:13-slim

RUN mkdir /app

WORKDIR /app

COPY . .

COPY Dockerfile .

COPY package.json .

COPY jest.config.js .  

RUN yarn

CMD [ "yarn", "nm" ]

