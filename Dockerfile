FROM node:14.17.0-alpine AS deps

ENV NODE_ENV development

WORKDIR /node/
COPY package.json package.json
COPY yarn.lock yarn.lock*
COPY prisma ./prisma/
RUN yarn install

FROM node:14.17.0-alpine AS build

WORKDIR /node/app
COPY . .
COPY --from=deps /node/node_modules node_modules
COPY .env.example .env

EXPOSE 3000

CMD ["yarn", "dev"]
