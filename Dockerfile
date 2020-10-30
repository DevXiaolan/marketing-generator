FROM nginx:latest

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY ./ /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]