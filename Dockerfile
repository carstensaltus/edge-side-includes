FROM node:dubnium-slim

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

EXPOSE 80

CMD [ "node", "/usr/src/app/index.js" ]