# Proxy API Documentation

## Base URL
```
http://localhost:3001/api
```

## Authentication
All authenticated requests require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### POST /auth/signup
Create a new account.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "token": "eyJhbGc...",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2024-07-01T00:00:00Z"
  }
}
```

#### POST /auth/login
Login to an existing account.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** Same as signup

#### GET /auth/me
Get current user information. Requires authentication.

**Response:**
```json
{
  "id": "123",
  "email": "user@example.com",
  "name": "John Doe",
  "createdAt": "2024-07-01T00:00:00Z"
}
```

#### POST /auth/logout
Logout current user. Requires authentication.

### Subscriptions

#### GET /subscriptions/plans
Get all available subscription plans.

**Response:**
```json
[
  {
    "id": "starter",
    "name": "Starter",
    "price": 29,
    "bandwidth": 100,
    "connections": 10,
    "features": [...]
  },
  ...
]
```

#### GET /subscriptions/user/:userId
Get user's current subscription. Requires authentication.

#### POST /subscriptions
Create a new subscription. Requires authentication.

**Request:**
```json
{
  "planId": "professional",
  "paymentMethodId": "pm_xxx"
}
```

#### POST /subscriptions/:id/cancel
Cancel a subscription. Requires authentication.

## Error Responses

**400 Bad Request:**
```json
{
  "message": "Validation error description"
}
```

**401 Unauthorized:**
```json
{
  "message": "Invalid or missing authentication token"
}
```

**500 Internal Server Error:**
```json
{
  "message": "Internal server error"
}
```
