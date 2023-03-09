FROM node:14-bullseye as builder

WORKDIR /app
RUN git clone https://github.com/blinkhash/foundation-v2-server.git .

# pin version (2023-03-09)
RUN git checkout 956a380f89f8b2bf545736b4b1dfb7c171b88755

RUN npm ci

RUN npm install foundation-v2-bitcoin@0.0.23

CMD ["npm", "run", "start"]
