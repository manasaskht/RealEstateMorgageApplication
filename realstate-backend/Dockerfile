# specify the node base image with your desired version node:<version>
FROM node:8.11.4
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR S:\Study\Cloud\Project\Master\realstate-backend
COPY ["package.json", "package-lock.json","./"]
RUN npm install
COPY . .
# replace this with your application's default port
EXPOSE 1339
CMD sails lift
