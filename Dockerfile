FROM node:14.19.1

WORKDIR /srv/app
COPY ./package.json ./
COPY ./yarn.lock ./

# Copy source code to container
COPY . .
RUN rm -rf ./node_modules

RUN ls -la

ENV NODE_ENV production
# Install dependentcy lib
RUN yarn install
RUN yarn build

EXPOSE 1337
CMD ["yarn", "start"]
