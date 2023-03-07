FROM node:16-alpine

WORKDIR /

ENV PATH node_modules/.bin:$PATH

RUN yarn cache clean

COPY package.json ./

RUN yarn install 

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]