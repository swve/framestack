FROM node:latest

EXPOSE 8080 3000 

RUN mkdir /usr/src/app

WORKDIR /usr/src/app 

COPY . . 

RUN npm install && npm run build

CMD npm run start 
