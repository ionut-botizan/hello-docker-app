FROM node:alpine

WORKDIR /usr/src/hello-docker-app
COPY ./src ./

EXPOSE 8080
ENV NODE_PORT 8080
ENV INSTANCE_NO 1

CMD [ "node", "test.js" ]
