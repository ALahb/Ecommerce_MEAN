
FROM node:12.22.0 as node 

WORKDIR . /src

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "npm", "start ]

EXPOSE 3001