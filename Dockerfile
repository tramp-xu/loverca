FROM node:8.4

RUN mkdir /app
WORKDIR /app
ADD . /app/

RUN npm install

EXPOSE 8080

CMD npm run dev