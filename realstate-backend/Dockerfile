# specify the node base image with your desired version node:<version>
FROM node:8.11.4
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR Users/Genny/Documents/Dalhousie/Summer/Cloud/assignment5/cloud-gladiators/broker_backend
COPY ["package.json", "package-lock.json","./"]
RUN npm install
COPY . .
# replace this with your application's default port
EXPOSE 1336
CMD sails lift
