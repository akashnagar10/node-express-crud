Node Express CRUD API

A simple REST API built with Node.js, Express.js, and MongoDB to perform basic CRUD (Create, Read, Update, Delete) operations on users.
This project demonstrates a clean backend architecture using controllers, routes, and models.

Features :
- Create User
- Get All Users
- Get User by ID
- Update User
- Delete User
- RESTful API design
- MongoDB database integration
- MVC folder structure

Tech Stack : 
- Backend: Node.js
- Framework: Express.js
- Database: MongoDB
- ODM: Mongoose

Environment Variables: dotenv

Project Structure : 
- node-express-crud
│
├── config
│   └── db.js
│
├── controllers
│   └── userController.js
│
├── models
│   └── userModel.js
│
├── routes
│   └── userRoutes.js
│
├── .env
├── .gitignore
├── index.js
└── package.json


Installation : 
- Clone the repository:git clone https://github.com/akashnagar10/node-express-crud.git
- Navigate to the project directory: cd node-express-crud
- Navigate to the project directory: cd node-express-crud

Create a .env file in the root directory : 
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/node-crud

Run the Project
- Development mode: npm start
- Server will start on: http://localhost:3000
