FROM node:22.1.0-alpine as builder

WORKDIR /website

COPY package.json package-lock.json ./

RUN npm ci 

