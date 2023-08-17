# Vehicle API

The Vehicle API is a Node.js application built using the Express.js framework. It provides an API for retrieving vehicle information and state based on the provided vehicle ID and timestamp.

## Setup and Usage

- Build Docker Image

```
docker build -t motorway-test-backend:latest .
```

- Run Database

```
docker compose up -d
```

- Build Project

```
npm install --save-dev
```

- Change Config File **.env.dev** as **.env**

- Run Project

```
node index.js
```

- Run Tests

```
npx mocha tests/vehicleTest.js
```

# Updates / 17.08.2023

- Added nodemon library to detect when file changes on development
- Added morgan library for express logging
- Updated run scripts for dev and test
- Added logs and changed log level to debug

# Considerations for a Production Environment

- [x] Implement error handling to handle potential issues with the database connection or query.
- [x] Use environment variables to store sensitive information like database credentials.
- [x] Implement logging to track API requests and errors.
- [x] Cache request results
- [x] Write unit tests and integration tests to ensure the API functions as expected.
- [ ] Set up proper security measures, such as authentication and authorization, depending on your application's requirements.
- [ ] Consider using a process manager like PM2 to manage multiple instances of the API for better reliability and scalability.
- [ ] Use a load balancer
