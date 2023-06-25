# APP Build Stage
FROM node:latest as builder
WORKDIR /app
RUN git clone  --depth 1 --branch  main https://github.com/Einsteiniumeinsteinian/emart-frontend.git .
RUN rm -rf node_modules README.md
RUN npm ci --legacy-peer-deps
RUN  npm ci --legacy-peer-deps final-form
RUN npm run build

# Nginx Setup
FROM nginx:stable-alpine3.17
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]