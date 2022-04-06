const express = require('express');
const cors = require('cors')
const todosRoute = require('./routes/todos')
const { connectDB } = require('./config/db')
require('dotenv').config()

const port = process.env.PORT || 5001;

connectDB()

const app = express();
app.use(express.json())
app.use(cors())
app.use('/todos', todosRoute)

app.listen(port, () => console.log(`Listening on port ${port}`));