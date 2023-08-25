FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm i -g nodemon

COPY . .
EXPOSE 5000
CMD [ "nodemon", "./server.js" ]
