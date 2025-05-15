# Wolfpack Submission

## Overview
This project is a submission for the Wolfpack test. It is built using TypeScript, Express, and Mongoose for managing routes, middleware, and database interactions.

## Features
- **Admin Routes**: Routes for managing orders and viewing admin-specific data.
- **API Routes**: Routes for user interactions, such as creating and updating orders.
- **DTO Validation**: Middleware for validating request payloads using class-validator.
- **Error Handling**: Centralized error handling for asynchronous operations.
- **MongoDB Integration**: Mongoose models for managing database schemas.

## Project Structure
- **src/models**: Mongoose schemas for database models.
- **src/routes**: Route definitions for admin and API endpoints.
- **src/middleware**: Custom middleware for validation and error handling.
- **src/controllers**: Business logic for handling requests.

## Checklist

### Admin Routes
- [x] GET /admin/orders/: List all orders.
- [x] GET /admin/orders/:id: View a specific order.
- [x] PATCH /admin/orders/:id: Update the status of an order.

### API Routes
- [x] GET /orders/: List all orders for a user.
- [x] POST /orders/: Create a new order.
- [x] PATCH /orders/:id: Update an existing order.

### Middleware
- [x] validateDto: Validates request payloads using DTOs.
- [x] asyncHandler: Handles asynchronous route errors.

### Models
- [x] Order: Mongoose schema for orders.
- 
- ### TODO
- [ ] Deploy this to a live service.
- [ ] Add authentication and guards.
