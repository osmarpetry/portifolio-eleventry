---
title: "Docker Annotations"
date: 2025-01-15
tags:
  - '#docker'
  - '#devops'
description: "Docker annotations and notes"
layout: post.njk
---

# Docker Annotations

[[Docker]]
https://github.com/osmarpetry/docker-react
# Docker
To run Docker to development run the following command:
`docker run -p 3000:3000 -v /usr/app/node_modules -v $(pwd):/usr/app create-react-appd`
Don't forget to run this following command before:
`docker image build -t create-react-app . -f Dockerfile.dev`
You don't need to have `node__modules` in your local machine!
## Run tests with Docker
You must have already did the `docker image build` of the Dockerfile.dev, to do this following command:
`docker run -p 3000:3000 -v /usr/app/node_modules -v $(pwd):/usr/app create-react-app npm run test`
If you want to have control when running the test, do this following command:
`docker run -it -p 3000:3000 -v /usr/app/node_modules -v $(pwd):/usr/app create-react-app npm run test`
## Run with docker-compose
The following command will start the web app and in another service will start to run tests (not on watch mode 😥 ):
`docker-compose up`
## Build then host on nginx
Should run:  
  
`docker build . -t create-react-app-nginx`
The run:  
  
`docker run -p 8080:80 create-react-app-nginx`