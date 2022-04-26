FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn
COPY . .

EXPOSE 8000
CMD [ "yarn", "start" ]