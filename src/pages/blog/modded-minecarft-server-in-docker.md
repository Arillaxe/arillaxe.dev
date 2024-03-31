---
layout: ../../layouts/PostLayout.astro
title: "Modded Minecraft server in Docker"
pubDate: 2024-03-29
author: "Bekir Shabutov"
---

So you've decided to play some modded minecraft with your friends and you have a VDS or a VPS lying around.
Lets use that to lauch the server there with docker.

Using this snippet for your `docker-compose.yaml` file should do the trick:

```yaml title="docker-compose.yaml"
version: "3.2"

services:
  minecraft:
    build: .
    ports:
      - "25565:25565"
    volumes:
      - .:/minecraft
    tty: true
    stdin_open: true
```

With the following `Dockerfile`:

```dockerfile title="Dockerfile"
FROM eclipse-temurin:latest
WORKDIR /minecraft
COPY . .
RUN chmod +x ./start.sh
CMD ./start.sh
```

Now run the docker-compose and it should all be running.

> Make sure you have the port `25565` opened

```bash
$ docker-compose up -d --build
```
