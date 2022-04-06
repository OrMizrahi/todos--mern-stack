const TodosService = require('../services/todos')

exports.getTodos = async (req, res) => {
  try {
    const todos = await TodosService.getTodos()
    return res.status(200).json({ status: 200, data: todos, message: "fetched all todos" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.addTodo = async (req, res) => {
  try {
    const todoContent = req.body.content
    const createdTodo = await TodosService.addTodo(todoContent)
    return res.status(200).json({ status: 200, data: createdTodo, message: "added todo" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.editTodo = async (req, res) => {
  try {
    const todoContent = req.body.content
    const todoId = req.query.id
    const editedTodo = await TodosService.editTodo(todoId, todoContent)
    return res.status(200).json({ status: 200, data: editedTodo, message: "edited todo" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.query.id
    const deletedId = await TodosService.deleteTodo(todoId)
    return res.status(200).json({ status: 200, data: deletedId, message: "deleted todo" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}