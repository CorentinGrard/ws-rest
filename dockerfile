FROM node:lts

# create destination directory
RUN mkdir -p /usr/src/MPLbank_auth
WORKDIR /usr/src/MPLbank_auth

# copy the app, note .dockerignore
COPY . /usr/src/MPLbank_auth/
RUN npm install

# expose 5000 on container
EXPOSE 5000

# Environement variables
ENV NODE_ENV=production
ENV PORT=5000

# start the app
CMD [ "npm", "start" ]