
# Étape 1 : construire l'application React
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Étape 2 : héberger l'application avec Apache
FROM httpd:2.4

COPY httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

EXPOSE 80