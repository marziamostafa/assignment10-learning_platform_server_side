const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const categories = require('./Data/Categories.json')


app.use(cors())

app.get('/', (req, res) => {
    res.send('api for courses');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories);
})

app.get('/courses-categories/:id', (req, res) => {
    const id = req.params.id;
    const category = categories.find(ctg => ctg.id === id)
    res.send(category)
})

app.listen(port, () => {
    console.log('courses server running', port)
});