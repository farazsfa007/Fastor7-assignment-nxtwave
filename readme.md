# Fastor CRM Backend (Node.js + MongoDB)

# Overview

- Fastor CRM Backend is a RESTful API built using Node.js, Express.js, and MongoDB.
- It provides core CRM features such as customer management, authentication, and data storage.
- The project is deployed live on Render and can be easily integrated with any frontend (React, Angular, Vue, etc.).

- Live API Base URL:
- https://fastor7-assignment-nxtwave.onrender.com

# Tech Stack
- Layer	Technology
- Backend Framework	Node.js, Express.js
- Database	MongoDB (Mongoose ODM)
- Authentication	JWT (JSON Web Token)
- Environment Config	dotenv
- Hosting	Render

# Folder Structure

Fastor-crm-node-mongo/
├── server.js                # Entry point of the application
├── package.json             # Node dependencies
├── .env                     # Environment variables (not committed)
├── .env.example             # Example env file
├── /config/
│   └── db.js                # MongoDB connection
├── /models/
│   └── User.js              # User model schema
├── /routes/
│   ├── userRoutes.js        # User-related API routes
│   └── customerRoutes.js    # Customer-related API routes
├── /controllers/
│   ├── userController.js    # Handles user CRUD & auth
│   └── customerController.js# Handles customer CRUD
└── /middleware/
    └── authMiddleware.js    # JWT token verification


# Github Link
- https://github.com/farazsfa007/Fastor7-assignment-nxtwave

# Render Url
- https://fastor7-assignment-nxtwave.onrender.com