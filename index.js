const express = require("express");

const userRouter = require("./routes/userRoutes");
const { connectToMongoDatabase } = require("./connection");
const { logger } = require("./middlewares");

const app = express();
const PORT = process.env.PORT || 3000;

// Connection
connectToMongoDatabase("mongodb://localhost:27017/node-express-crud")    
  .then(() => console.log("Connected to MongoDB successfully 🚀"))
  .catch((err) => console.error("Failed to connect to MongoDB 👻:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(logger("log.txt"));
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
