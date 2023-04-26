FROM node:16-alpine

RUN npm -g install serve
RUN mkdir /app
WORKDIR /app

COPY package.json . yarn.lock ./

RUN yarn install

COPY . /app

RUN yarn build

EXPOSE 3013

CMD ["yarn", "serve"]