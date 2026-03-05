const fs = require("fs");

async function logger(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `Request received for ${fileName} at ${new Date().toISOString()} \n IP : ${
        req.ip
      }\n Method : ${req.method}\n URL : ${req.originalUrl}\n\n`,
      (err, data) => {
        if (err) {
          console.error("Error writing to log file:", err);
        }
        next();
      }
    );
  };
}

module.exports = { logger };