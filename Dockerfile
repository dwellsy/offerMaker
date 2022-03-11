FROM node:lts-gallium

WORKDIR /

ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm config set registry https://registry.npmjs.org/
RUN npm install 

# add app
COPY . ./

# start app
CMD ["npx", "craco", "start"]