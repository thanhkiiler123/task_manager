const express = require("express");
const tasks = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(tasks.getAllTasks).post(tasks.createTask);
router
    .route("/:id")
    .get(tasks.getTask)
    .patch(tasks.updateTask)
    .delete(tasks.deleteTask);

module.exports = router;
