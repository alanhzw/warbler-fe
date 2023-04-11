FROM nginx
COPY docker/nginx/ /etc/nginx/
COPY dist/ /usr/share/nginx/html/

