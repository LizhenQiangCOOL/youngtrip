FROM node:12.16.3-stretch
COPY ./ /app
WORKDIR /app
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install 
RUN npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf