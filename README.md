# Skins Management API

Welcome to the Skins Management API, a service designed to allow users to interact with a digital inventory of skins for video games. This document provides instructions for setting up and using the API, which supports operations such as querying, purchasing, modifying, and deleting skins.

## 🎮 Features
Query available skins for purchase.
Register and authenticate users.
Allow users to buy skins and save them to their account.
Enable users to modify the color of purchased skins.
Allow users to delete skins from their inventory.
Retrieve specific skin details by ID.

## 🔐 User Authentication

- **User Registration**: Allows a new user to register with the system.
- **User Login**: Permits an existing user to log in to the system.

## 🛠 API Endpoints
The API provides several endpoints for managing skins as well as user authentication:
- `GET /skins/available`: Retrieves a list of all available skins.
- `POST /skins/buy`: Enables a user to purchase a skin.
- ~~`GET /skins/mySkins`: Fetches a list of skins owned by the user.~~
- ~~`PUT /skins/color`: Allows a user to change the color of a purchased skin.~~
- ~~`DELETE /skins/delete/{id}`: Removes a skin from the user's inventory.~~
- ~~`GET /skin/getSkin/{id}`: Gets details of a specific skin.~~
  
For user authentication:

- `POST /users/register`: Registers a new user.
- `POST /users/login`: Authenticates a user and returns a JWT token.


## ⚙️ Environment Setup
To run this project, you'll need Node.js and a package manager like npm installed.

### Clone the repository
```bash
git clone https://github.com/xpan1c/jump2digital-backend-challenge.git
cd jump2digital-backend-challenge
```
### Install Dependencies
```bash
npm install
```
### Set Up Environment Variables
Copy the `.env-template` to a .env file and fill in the necessary details.

### Database Setup
Ensure you have MySQL set up and running. Fill in the necessary database connection details in your .env file.

## 🏁 Running the API
### Development
To start the API in development mode, use the following command:
```bash
npm run dev
```
### Production
Build the project and start the server for production use with the following commands:

```bash
npm run build
npm start
```
## 🚢 Docker Support
This project can be run using Docker and docker-compose. The following services are defined:

**mysql:** MySQL database server.

**api:** The Skins Management API service.
### Environment Setup

Before running the application, configure your environment variables based on the .env-template provided.

To start the services, use:

```bash
docker-compose up -d
```
