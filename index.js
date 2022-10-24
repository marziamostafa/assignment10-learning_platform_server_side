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


app.listen(port, () => {
    console.log('courses server running', port)
});