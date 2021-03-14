FROM node
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json /usr/src/
RUN npm install

# Copy code sources
COPY app /usr/src/app/

EXPOSE 8899
CMD ["node", "app.js"]
