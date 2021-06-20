# --- base images -------------
FROM repository.gridsum.com:8443/techpub/node-base:alpine-10.16.1  AS base
# --- run images -----------
FROM law-harbor.internal.gridsumdissector.com/frontend/nginx-base:1.17.4-1.0 AS run

# --- dependencies images -------------
FROM base AS dependencies

RUN npm config set registry http://registry.npm.gridsum.com/
RUN npm config set sass-binary-site "https://npm.taobao.org/mirrors/node-sass/"
WORKDIR /workdir
ADD . /workdir

RUN npm install  --registry=http://registry.npm.gridsum.com

RUN npm run build-rel

# --- test images --------------
#FROM dependencies  AS test
#RUN npm run lint


FROM run AS release
 
COPY --from=dependencies --chown=nginx  /workdir/dist  /usr/html/

EXPOSE 8080