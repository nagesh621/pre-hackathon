FROM node:20.4.0
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm install --silent
RUN npm install react-scripts -g --silent
CMD [ "npm start" ]