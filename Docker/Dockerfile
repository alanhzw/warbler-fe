# 拉取 nginx 镜像
FROM nginx

COPY dist/ /usr/share/nginx/fe/

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]