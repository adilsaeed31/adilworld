FROM node:13-slim

RUN mkdir /app

WORKDIR /app

COPY . .

COPY Dockerfile Dockerfile

COPY package.json package.json

COPY jest.config.js jest.config.js  

RUN yarn

CMD [ "yarn", "nm" ]

