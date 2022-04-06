const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    content: String,
    createdAt: Date
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;