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

## Proposal For a Production-Grade Scalable Microservice Architecture on AWS

For a production-grade scalable microservice architecture on AWS, you can consider the following services and approaches:

1. **Security & Authentication:**

   - Use Amazon Cognito for user authentication and access control.
   - Utilize AWS Identity and Access Management (IAM) for fine-grained permission management.

2. **Sensitive Secrets Management:**

   - Utilize AWS Secrets Manager for securely managing sensitive information such as database credentials, API keys, and more.

3. **Database:**

   - AWS RDS (Relational Database Service) for a managed relational database.
   - Amazon DynamoDB for a NoSQL database that scales automatically.

4. **Caching:**

   - Amazon ElastiCache for caching with Redis or Memcached.

5. **Service Discovery:**

   - AWS Cloud Map for dynamic service discovery and naming.

6. **Event Logging & Tracing:**

   - Amazon CloudWatch for logging and monitoring.
   - AWS X-Ray for distributed tracing and monitoring application performance.

7. **Inter-Service Communication:**

   - Use Amazon API Gateway for creating RESTful APIs to expose your microservices.
   - AWS App Runner or AWS Lambda for running serverless microservices.

8. **Event Tracing:**

   - Implement Amazon EventBridge (formerly CloudWatch Events) for event-driven architecture.

9. **Scaling:**
   - Utilize AWS Auto Scaling to automatically adjust the number of instances based on traffic.
   - Consider AWS Elastic Load Balancing for distributing traffic across instances.

Remember to implement security best practices, such as encrypting data in transit and at rest, setting up proper network security groups, and using encryption keys managed by AWS Key Management Service (KMS).

For an alternative third-party tech stack, you could explore Kubernetes for container orchestration, using services like Istio for service mesh and Prometheus for monitoring. You might also consider using platforms like Google Cloud Platform or Microsoft Azure, depending on your organization's preferences and expertise.

In either case, thorough planning and consideration of your application's specific needs are crucial for a successful and scalable production-grade microservices architecture.
