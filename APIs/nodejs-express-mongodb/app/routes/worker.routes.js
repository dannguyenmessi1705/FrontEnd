module.exports = (app) => {
  const workers = require("../controllers/worker.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", workers.create);

  // Retrieve all Tutorials
  router.get("/", workers.findAll);

  // Retrieve all published Tutorials
  router.get("/published", workers.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", workers.findOne);

  // Update a Tutorial with id
  router.put("/:id", workers.update);

  // Delete a Tutorial with id
  router.delete("/:id", workers.delete);

  // Delete all Tutorials
  router.delete("/", workers.deleteAll);

  app.use("/api/workers", router);
};
