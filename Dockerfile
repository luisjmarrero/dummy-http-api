FROM node:16.13-alpine as build
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

FROM node:16.13-alpine
COPY --from=build . . 
COPY . .
CMD [ "node", "app.js" ]