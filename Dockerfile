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

# limpa a pasta onde ficam os assets
RUN rm -rf /usr/share/nginx/html/*

# copia os arquivos de build Angular para o html
COPY --from=build /app/portfolio/dist/portfolio /usr/share/nginx/html

# sobrescreve o default.conf do Nginx
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

