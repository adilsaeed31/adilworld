FROM node:13-slim

RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn

CMD [ "yarn", "nm" ]

