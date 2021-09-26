FROM node:14.17-alpine as deps

WORKDIR /app

COPY ./package.json ./yarn.lock ./

RUN yarn install

# Builder

FROM node:14.17-alpine as builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules /app/node_modules

RUN yarn test && yarn build

# Productive image

FROM node:14.17-alpine

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.js /app/next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["yarn", "start"]