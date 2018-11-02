FROM node:9.4 as build

COPY . /tmp/build
WORKDIR /tmp/build

# Build JS
RUN yarn && yarn build

# Add main.css hashed file
# RUN sed -i "s/<\/head>/\ \ \ \ <link rel=\"stylesheet\" href=\"\/public\/$(ls public | grep main.*.css)\">\n<\/head>/" index.html

# Add bundle.js hashed file
# RUN sed -i "s/\/public\/bundle.js/\/public\/$(ls public | grep bundle.*.js)/" index.html

# Build artifact
RUN mkdir -p /bitnami/nginx && cp index.html /bitnami/nginx/ && cp -r public /bitnami/nginx/

# Load data into Bitnami Image
FROM bitnami/nginx:1.10.2-r3
EXPOSE -8080 -8443 +443
COPY --from=build /bitnami/nginx /opt/bitnami/nginx/html
