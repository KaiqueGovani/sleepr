FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package*.json tsconfig.json nest-cli.json ./

COPY apps/payments apps/payments
COPY libs libs

RUN npm install
RUN npm run build payments

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY apps/payments/package*.json ./apps/payments/

RUN npm install --omit=dev

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/payments/main"]