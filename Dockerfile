FROM node:14.16.0-alpine AS deps

ENV NODE_ENV development

WORKDIR /usr/app
COPY package.json package.json
COPY yarn.lock yarn.lock*
RUN yarn install

FROM node:14.16.0-alpine AS build

WORKDIR /usr/app
COPY . .
COPY --from=deps /usr/app/node_modules node_modules
COPY .env.example .env

EXPOSE 3000

CMD ["yarn", "dev"]
