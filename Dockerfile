# Build the Angular app
FROM node:20 AS build
WORKDIR /app
COPY portfolio/package*.json ./portfolio/
WORKDIR /app/portfolio
RUN npm ci
COPY portfolio/ .
RUN npm run build -- --configuration production

# Stage for running nginx
FROM nginx:alpine
RUN mkdir -p /var/www/certbot
COPY --from=build /app/portfolio/dist/portfolio /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
