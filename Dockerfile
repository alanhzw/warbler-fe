FROM node:16
WORKDIR /app
COPY  . /app
RUN npm set registry  https://registry.npmmirror.com
RUN npm install
RUN npm run build

FROM nginx:1.20
COPY /app/dist/ /usr/share/nginx/html/
COPY docker/nginx/ /etc/nginx/
