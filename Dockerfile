FROM node:alpine

WORKDIR /build
COPY build /build
RUN npm install -g http-server
EXPOSE 80

CMD http-server . -p 80
