---
title: "Docker"
date: 2025-01-15
tags:
  - '#docker'
  - '#devops'
description: "Docker introduction and commands"
layout: post.njk
---

# Docker

## Introduction
Run the container in background:
```bash
docker container run --name xuxa --publish 80:80 nginx --detach
```
List containers:
```bash
docker container ls -a
```
Stop:
```bash
docker stop xuxa 
```
Remove container:
```bash
docker container rm -f 6666
```
Processes in the container:
```bash
docker top xuxa
```
Environment variable:
```bash
docker container run -d -p 3306:3306 --name db -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
```

See what’s going on
- `-it` to enter the container:
```bash
docker container run -it --name proxy nginx bash
```
- `exec` for an existing container

Which port is mapped:
```bash
docker container port xuxa
```

## From the terminal
`pgcli -h localhost -p 5432 -U rio_perform rio_perform`

## Clean everything (dangerous)
```bash
docker kill $(docker ps -q) && docker rm $(docker ps -a -q) && docker volume rm -f $(docker volume ls -f dangling=true -q)
```

## Images
Build from an official Nginx image; it will serve your `index.html` from the container root:
Dockerfile
```yml
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY index.html index.html
```
Build and run
```bash
docker image build -t nginx-with-html .
docker run -d -p 8080:80 nginx-with-html
```

## Dockerfile
It will only run `npm i` if `package.json` changes. If you change project resources, you don’t need to reinstall.
Dockerfile has no `--watch` by default.

## Network
There are 3 types:
- `host`: host network
- `bridge`: only between containers
- `none`: no network

Example:
```bash
docker run --rm --net none alpine ash -c "ifconfig"
```
This starts alpine, removes it after exit (`--rm`), with no network access. The first command runs in `ash` (lightweight) via `-c`.

## docker-compose
When using docker-compose, services can freely reach each other—no need to expose ports internally.

To rebuild after changes:
```bash
docker-compose up -d --build
```

To see processes managed by docker-compose (run inside the compose directory):
```bash
docker-compose ps
```

Example `docker-compose.yml`:
```yaml
version: '3'
services:
  db:
    image: mongo:3.4
  backend:
    image: node:8.1
    volumes:
      - ./backend:/backend
    ports:
      - 3000:3000
    command: bash -c "cd /backend && npm i && node app"
  frontend:
    image: nginx:1.13
    volumes:
      - ./frontend:/usr/share/nginx/html/
    ports:
      - 80:80
```

Attach inside docker-compose:
```bash
docker-compose exec db psql -U postgress -d email_sender -c 'select * from email'
```

## Local Dev
By default Docker does not have watch mode; volume mounts (`-v`) replicate changes from host to container.
The volume `-v /app/node_modules` prevents the second volume mapping from replacing the container’s `node_modules` with the host’s (which might be empty). It keeps the layer from the build stage.