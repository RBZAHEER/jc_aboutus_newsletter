# Newsletter Subscription API

This project is an API for subscribing to a newsletter. It allows users to submit their email addresses to subscribe and stores them in a database using MongoDB. The API is built using Node.js, Express.js, and Mongoose.

## Features

- **Subscribe to Newsletter**: Allows users to subscribe to the newsletter by submitting their email address.
- **MongoDB Integration**: Stores email addresses in a MongoDB database.
- **Validation**: Ensures that the email field is required and unique.
- **Error Handling**: Provides informative error messages for invalid input.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Postman** (for testing)

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or later)
- **MongoDB** (local or cloud instance)
- **Postman** (for API testing)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/RBZAHEER/jc_aboutus_newsletter.git
cd jc_aboutus_newsletter
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

### Run the Server

```bash
node server.js
```

By default, the server runs on `http://localhost:5000`.

## API Endpoints

### 1. Subscribe to Newsletter

- **URL**: `/api/subscribe`
- **Method**: `POST`
- **Description**: Subscribes a user to the newsletter by saving their email.
- **Request Body**:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Response**:
  - Success (201):
    ```json
    {
      "message": "Successfully subscribed to the newsletter!"
    }
    ```
  - Error (400):
    ```json
    {
      "message": "Email is required"
    }
    ```
  - Error (409):
    ```json
    {
      "message": "Email already exists"
    }
    ```

## Testing

You can use [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the API endpoints.

### Example Postman Request

- **Method**: `POST`
- **URL**: `http://localhost:5000/api/subscribe`
- **Body** (raw, JSON):
  ```json
  {
    "email": "test@example.com"
  }
  ```

## Project Structure

```bash
.
├── models
│   └── Subscriber.js   # Mongoose schema for subscribers
├── routes
│   └── newsletter.js   # API routes for subscribing to newsletter
├── server.js           # Entry point for the server
├── README.md           # API documentation
└── package.json        # Node.js dependencies and scripts
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
