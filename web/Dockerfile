FROM node:14-bullseye as base
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR app

COPY package.json .

RUN pnpm install

FROM base as builder
COPY . .
RUN pnpm build --production
RUN pnpm prune --production

FROM node:14-bullseye-slim as runtime
WORKDIR app
COPY package.json .
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/build /app/build
EXPOSE 3000
ENTRYPOINT ["node", "build/index.js"]