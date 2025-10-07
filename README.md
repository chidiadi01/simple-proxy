# Demo App Dockerized

Here, we have two backend apps, a chat application and an auth application which communicate with the frontend. The whole setup is run by Nginx as a web proxy, and a web server, because I used a HTML file served by Nginx for the frontend. The frontend can as well be another container running Node with all the Next.js files (or whatever javascript library or framework).

![alt text](dker.png)

## Creating versions

## Deployment
To deploy, run `docker compose up -f docker-compose-deploy.yml && docker compose -f docker-compose-deploy.yml up`. This will pull the images and deploy them on your computer.