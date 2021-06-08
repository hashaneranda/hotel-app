# Pull base image.
FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install

# Binds to port 4002
EXPOSE  4002

CMD npm run dev