# Vehicle API

The Vehicle API is a Node.js application built using the Express.js framework. It provides an API for retrieving vehicle information and state based on the provided vehicle ID and timestamp.

## Setup and Usage

- Build Docker Image

```
docker build -t motorway-test-backend:latest .
```

- Run Database Container

```
docker compose up -d
```

- Stop Database Container

```
docker compose down
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

- Test Api via Curl

```
curl http://localhost:3000/vehicles/3/2022-09-12T10:00:00Z
```

- Run Tests

```
npx mocha tests/vehicleTest.js
```
