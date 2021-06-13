FROM node:lts-alpine

WORKDIR /app


COPY ./package*.json ./

RUN ls -al

RUN npm install

COPY . .

CMD [ "npm", "start" ]