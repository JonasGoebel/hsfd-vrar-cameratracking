FROM node:18.1.0-slim
WORKDIR /code
COPY . .
RUN npm install
RUN npm run build

FROM nginx:mainline-alpine-slim
COPY --from=0 /code/dist /usr/share/nginx/html/
COPY --from=0 /code/img /usr/share/nginx/html/img
