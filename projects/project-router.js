const express = require("express");

const projects = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  projects
    .find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  projects
    .findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  projects
    .findTasks(id)
    .then(tasks => {
      if (tasks) {
        res.status(200).json(tasks);
      } else {
        res
          .status(404)
          .json({
            message: "Could not find tasks for the  project with the given id"
          });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params;

  projects
    .findResources(id)
    .then(resources => {
      if (resources) {
        res.status(200).json(resources);
      } else {
        res
          .status(404)
          .json({
            message:
              "Could not find resources for the  project with the given id"
          });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  projects
    .add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const taskData = req.body;
  const { id } = req.params;
  projects.addTask(id, taskData).then(task => {
    projects.findTasks(id).then(task => {
      res.status(200).json(task[task.length - 1]);
    });
  });
});

router.post("/:id/resources", (req, res) => {
  const resourceData = req.body;
  const { id } = req.params;
  projects.addResource(id, resourceData).then(resource => {
    projects.findResources(id).then(resources => {
      res.status(200).json(resources[resources.length - 1]);
    });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params.id;
  const changes = req.body;

  projects
    .findById(id)
    .then(project => {
      if (project) {
        Schemes.update(changes, id).then(updatedproject => {
          res.json(updatedproject);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to update project" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  projects
    .remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;
