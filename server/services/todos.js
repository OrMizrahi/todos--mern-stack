const Todo = require('../models/Todo')

exports.getTodos = async () => {
  try {
    const todos = await Todo.find()
    return todos;
  } catch (e) {
    throw Error('Error while getting todos')
  }
}

exports.addTodo = async (content) => {
  try {
    const todo = new Todo({
      content,
      createdAt: Date.now()
    })
    const createdTodo = await todo.save()
    return createdTodo;
  } catch (e) {
    throw Error('Error while adding todo')
  }
}

exports.editTodo = async (id, content) => {
  try {
    const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, { content }, { new: true })
    return updatedTodo
  } catch (e) {
    throw Error('Error while editing todo')
  }
}

exports.deleteTodo = async (id) => {
  try {
    await Todo.findByIdAndDelete(id)
    return id;
  } catch (e) {
    throw Error('Error while deleting todo')
  }
}