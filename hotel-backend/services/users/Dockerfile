# Pull base image.
FROM node:latest

COPY . /src/

# Install app dependencies
WORKDIR /src

RUN npm install

# Binds to port 4001
EXPOSE  4001

CMD npm run dev