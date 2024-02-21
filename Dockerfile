FROM nodered/node-red:3.1.5

USER root

RUN mkdir ./custom-nodes


COPY package.json ./custom-nodes/package.json
COPY dist/ ./custom-nodes/dist

RUN npm install --omit=optional --omit=dev ./custom-nodes