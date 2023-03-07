FROM node:14-bullseye as builder

WORKDIR /app
RUN git clone https://github.com/blinkhash/foundation-v2-server.git .

# pin version (2023-03-05)
RUN git checkout 2dea48bb8408adf9c99da3ee0314ad72aedc6a62

RUN npm ci

RUN npm install foundation-v2-bitcoin@0.0.23

CMD ["npm", "run", "start"]
