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
