FROM nginx:alpine


COPY ./dist/video-platform-front /usr/share/nginx/html

RUN echo "hola"





