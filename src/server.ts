import config from "./config/config";
import mongoose from "mongoose";
import app from "./app";

process.on("uncaughtException", (err: Error) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION, Shutting down ...");
  process.exit();
});

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err: any) => {
    console.log("Unable to connect to the database");
    console.log(err);
  });

const server = app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});

process.on("unhandledRejection", (err: any) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION, Shutting down ...");

  server.close(() => {
    process.exit();
  });
});
process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED, Shutting down gracefully");
  server.close(() => {
    console.log("Process terminated");
  });
});
