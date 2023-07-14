FROM alpine:3.18

ENV NODE_VERSION 20.4.0
WORKDIR /app
COPY . /app
RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm start