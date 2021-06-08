FROM node:16-alpine
WORKDIR /app
ADD package*.json ./
RUN npm i
ADD . .
CMD npm start