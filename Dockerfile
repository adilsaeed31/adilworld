FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn

CMD [ "yarn", "nm" ]

