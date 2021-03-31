const express = require("express");
const api = express();
const usersRouter = require("./routers/users");
const heroesRouter = require("./routers/heroes");
const eventsRouter = require("./routers/events");
const swagger = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");

api.use(express.json());
api.use(cors());
api.use("/uploads", express.static("uploads"));
api.use("/api-docs", swagger.serve, swagger.setup(swaggerDocument));

api.use("/api/v1/users", usersRouter);
api.use("/api/v1/heroes", heroesRouter);
api.use("/api/v1/events", eventsRouter);

api.listen(3001, (err) => {
  if (err) return console.log("Error happened while starting the server: ", err);

  console.log("Application started on port 3001...");
});
