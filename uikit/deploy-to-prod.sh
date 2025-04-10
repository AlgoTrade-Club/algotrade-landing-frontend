#!/bin/bash 
echo "Going to build the docker images"
docker build -t algotrade-landing-web:latest .
echo "Images built"

echo "What environment are we sending to? [e2 (testing)] [e3 (AWS production)]"
read environment

e3ServerIp="64.23.190.181"
e2ServerIp="10.0.0.68"

DOCKER_PROD_DIRECTORY="./prodBuilds"

# Crear el directorio si no existe
if [ ! -d "$DOCKER_PROD_DIRECTORY" ]; then
    echo "The directory $DOCKER_PROD_DIRECTORY does not exist. Creating it..."
    mkdir -p "$DOCKER_PROD_DIRECTORY"
else
    echo "The directory $DIRECTORIO already exists."
fi

echo "Creating tar files from docker images"
docker save -o ./prodBuilds/algotrade-landing-web.tar   algotrade-landing-web:latest

if [[ $? -ne 0 ]]; then
    echo "Failed to create tar files"
    exit 1
fi

if [[ "$environment" == "e2" ]]
then
    echo "Starting the process of deploying to $environment"
    echo "Transferring the tar files to the $environment server"
    scp ./prodBuilds/algotrade-landing-web.tar             rafad900@$e2ServerIp:/home/rafad900
    echo "Transferring script to open .tar files. This must be run on server side"
    scp open-images-from-tar.sh         rafad900@$e2ServerIp:/home/rafad900
    echo "Transferring the docker compose file"
    scp docker-compose.yml              rafad900@$e2ServerIp:/home/rafad900
elif [[ "$environment" == "e3" ]]
then
    echo "Starting the process of deploying to $environment"
    echo "Transferring the tar files to the $environment server"
    scp ./prodBuilds/algotrade-landing-web.tar         rafad900@$e3ServerIp:/home/rafad900
    echo "Transferring script to open .tar files. This must be run on server side"
    scp open-images-from-tar.sh         rafad900@$e3ServerIp:/home/rafad900
    echo "Transferring the docker compose file"
    scp docker-compose.yml              rafad900@$e3ServerIp:/home/rafad900
fi

