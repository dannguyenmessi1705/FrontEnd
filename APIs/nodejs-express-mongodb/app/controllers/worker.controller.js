const db = require("../models");
const Worker = db.workers;

// Create and Save a new Worker
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Worker
  const worker = new Worker({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });

  // Save Worker in the database
  worker
    .save(worker)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Worker.",
      });
    });
};

// Retrieve all Workers from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Worker.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving workers.",
      });
    });
};

// Find a single Worker with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Worker.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Worker with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Worker with id=" + id });
    });
};

// Update a Worker by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Worker.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Worker with id=${id}. Maybe Worker was not found!`,
        });
      } else res.send({ message: "Worker was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Worker with id=" + id,
      });
    });
};

// Delete a Worker with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Worker.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Worker with id=${id}. Maybe Worker was not found!`,
        });
      } else {
        res.send({
          message: "Worker was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Worker with id=" + id,
      });
    });
};

// Delete all Workers from the database.
exports.deleteAll = (req, res) => {
  Worker.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Workers were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all workers.",
      });
    });
};

// Find all published Workers
exports.findAllPublished = (req, res) => {
  Worker.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving workers.",
      });
    });
};
