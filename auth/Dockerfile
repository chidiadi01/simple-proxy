FROM node:18
WORKDIR /demoapp
COPY . .
RUN npm install express
RUN npm install cors
ENV PORT=4000
CMD ["node", "server.js"]
