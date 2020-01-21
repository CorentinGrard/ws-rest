FROM node:lts

# create destination directory
RUN mkdir -p /usr/src/ws-rest
WORKDIR /usr/src/ws-rest

# copy the app, note .dockerignore
COPY . /usr/src/ws-rest/
RUN npm install

# expose 5000 on container
EXPOSE 5000

# Environement variables
ENV NODE_ENV=production
ENV PORT=5000

# start the app
CMD [ "npm", "start" ]