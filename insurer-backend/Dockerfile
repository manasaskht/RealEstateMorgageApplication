# specify the node base image with your desired version node:<version>
FROM node:10.15.0
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR S:\Study\Cloud\Project\Master\insurer-backend
COPY ["package.json", "package-lock.json","./"]
RUN npm install bcryptjs
RUN npm install jsonwebtoken
RUN npm install sails-hook-validation
RUN npm install
COPY . .
# replace this with your application's default port
EXPOSE 1338
CMD sails lift
