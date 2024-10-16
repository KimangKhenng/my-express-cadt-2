# Express Server with Docker Compose

This project is an Express server that uses Docker Compose for setup and management. It includes a template .env file for environment variables and configuration.

## Project Structure:

	•	.env.template: Contains environment variables (like PORT and DB_NAME).
	•	docker-compose.yml: Defines the services for Docker.
	•	src/: Your application code, including server.js.
	•	package.json: Manages dependencies.

## Prerequisites:
Before you begin, make sure you have these installed:

	1.	Docker
	2.	Docker Compose
	3.	(Optional) Node.js, if you want to run the server locally without Docker.

## Setup Instructions:

cp .env.template .env


	•	Edit the .env file with appropriate values. The default values are:
	•	PORT=3000: The port where the Express server will run.
	•	DB_NAME=cadt-db: The name of your database.

	2.	Run with Docker Compose:
	•	To start your application, run the following command:

docker-compose up -d


	•	This will build and run the Express server based on the configuration in docker-compose.yml. The server will be available at http://localhost:4000 (or any port specified in your .env file).

## Stop the Application:
To stop and remove the Docker containers, run:

bash```
docker-compose down
```




Docker Compose Overview:

	•	The docker-compose.yml file defines the services for your project.
	•	The example configuration might look something like this:

version: '3'
services:
  app:
    build: .
    ports:
      - "${PORT}:${PORT}"
    env_file:
      - .env
    volumes:
      - ./:/app

This sets up an app service that builds from the current directory and maps the port defined in the .env file. You can expand this file to include other services, like a database.

Local Development (Optional):
If you want to run the server without Docker, you can:

	1.	Install dependencies:

npm install


	2.	Start the server:

npm start



The server will be available at http://localhost:3000 by default.

Additional Notes:

	•	You can customize your .env file and docker-compose.yml file to add more services, such as databases.
	•	Make sure your database is accessible if you’re using an external one.

This guide provides an overview of setting up and running your Express server with Docker Compose.