const express = require("express");
const app = express();
app.use(express.json());

const tasks = [
  {
    id: 1,
    name: "Jacob",
  },
  {
    id: 2,
    name: "Mermaid",
  },
  {
    id: 3,
    name: "Pasto",
  },
];

//code here

app.get("/tasks", async (req, res) => {
  try {
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ status: "failed", message: err });
  }
});
app.get("/tasks/:id", (req, res) => {
  if (!isNaN(+req.params.id) && +req.params.id <= 3 && +req.params.id > 0) {
    const data = tasks.find((el) => el.id === +req.params.id);
    res.status(200).json(data);
  } else {
    res.status(404).send("The task with the provided ID does not exist.");
  }
});

module.exports = app;
