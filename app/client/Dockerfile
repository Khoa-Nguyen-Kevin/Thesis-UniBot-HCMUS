FROM node:20-alpine

WORKDIR /app
RUN mkdir -p /opt/node_modules
COPY ./package.json /app
COPY ./package-lock.json /app

RUN npm install --force

COPY ./ /app

COPY . .

CMD ["npm", "run", "dev"]

