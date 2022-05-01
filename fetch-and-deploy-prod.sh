#!/bin/sh
# fetch-and-deploy-prod.sh
docker-compose -f docker-compose-prod.yml down && \
    docker-compose -f docker-compose-prod.yml pull && \
    GATEWAY_PORT=8000 docker-compose -f docker-compose-prod.yml up -d;