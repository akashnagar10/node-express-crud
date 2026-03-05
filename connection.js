const mongoose = require("mongoose");

async function connectToMongoDatabase(url) {
  return mongoose.connect(url);
}

module.exports = { connectToMongoDatabase };
