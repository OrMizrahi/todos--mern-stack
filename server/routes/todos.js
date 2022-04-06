const express = require('express');
const router = express.Router();
const TodosController = require('../controllers/todos')

router.get('/', TodosController.getTodos)

router.post('/add-todo', TodosController.addTodo)

router.put('/edit-todo', TodosController.editTodo)

router.delete('/delete-todo', TodosController.deleteTodo)

module.exports = router;