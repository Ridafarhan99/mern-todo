const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/to-do", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to DB"))
.catch(console.error);

const Todo = require('./models/Todo');

app.get('/todo', async(req, res) => {
    const todo = await Todo.find();

    res.json(todo);
})

app.listen(3001, () => console.log("Server Started on PORT 3001"));