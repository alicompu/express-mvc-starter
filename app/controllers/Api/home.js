const express = require('express');

const router = express.Router();

const Todo = require('../../models/todo');

// get home page
router.get('/', (req, res, next) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
