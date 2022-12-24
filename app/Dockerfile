FROM node:16.13.1-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16.13.1-alpine
WORKDIR /usr/src/app
COPY --from=build usr/src/app /usr/src/app
EXPOSE 4000
CMD [ "npm", "start" ]