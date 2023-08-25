# backend-k8s-deploy
This is the NodeJS backend for the frontend-k8s-deploy repo.

In the project directory, you can run:

### `nodemon ./server.js`

Runs the application on port 5000

### `Docker`

docker build -t repo/image_name:version .

('.' signifies the Dockerfile to be used from the current directory)

### `Kubernetes`

minikube start \
kubectl apply -f backEndDeploy.yml \
kubectl apply -f backEndSvc.yml
