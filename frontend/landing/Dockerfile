FROM node:10
RUN mkdir -p /user/src/app
WORKDIR /user/src/app
COPY ./package*.json ./
RUN yarn install --quiet
COPY . ./
RUN yarn build
EXPOSE 3000
ENTRYPOINT ["yarn", "start:prod"]