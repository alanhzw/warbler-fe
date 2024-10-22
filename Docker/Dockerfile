# 基于哪个镜像的基础上进行构建
# FROM node:16
# 工作目录
# WORKDIR /
# 拷贝当前目录下的文件 到 /app 中  .dockerignore 文件中可以声明忽略拷贝的文件
# COPY  . /

# RUN npm set registry  https://registry.npmmirror.com
# RUN npm install
# RUN npm run build

# COPY warbler-fe:/dist/ /home/work/warbler-fe/warbler-fe/



# 拉取 nginx 镜像
FROM nginx

# 拷贝构建好的前端文件到 Nginx 的默认静态文件目录
COPY dist /usr/share/nginx/html

# 拷贝 Nginx 配置文件
COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf

# 拷贝 SSL 证书和密钥
COPY Docker/ssl/warblerfe.top_bundle.crt /etc/nginx/ssl/warblerfe.top_bundle.crt
COPY Docker/ssl/warblerfe.top.key /etc/nginx/ssl/warblerfe.top.key

EXPOSE 80 443

CMD ["nginx","-g","daemon off;"]


# docker build -f ./Docker/Dockerfile -t warbler-fe . --no-cache
# docker run -d --name warbler-fe-instance -p 80:80 -p 443:443 --restart=always warbler-fe