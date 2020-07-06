FROM node:8 as builder
RUN mkdir /front-end
WORKDIR /front-end

# Copy app dependencies.
COPY dexam/package.json dexam/package-lock.json /front-end/dexam/

# Install app dependencies.
RUN npm install --prefix dexam

# Copy app files.
COPY dexam /front-end

RUN npm rebuild node-sass

# Build app
RUN npm run build --prefix dexam -- --output-path=./dist/out


FROM nginx:1.15.7-alpine
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /front-end/dist/out /usr/share/nginx/html
# Copy nginx configuration file.
#COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/conf.d/default.conf
# Copy nginx configuration file.
COPY ./nginx/nginx.conf /etc/nginx/conf.d
