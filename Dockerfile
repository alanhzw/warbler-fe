FROM node:14
RUN npm set registry  https://registry.npmmirror.com
RUN npm install
RUN npm run build

FROM nginx:1.20
COPY ./dist/ /usr/share/nginx/html/
COPY docker/nginx/ /etc/nginx/

