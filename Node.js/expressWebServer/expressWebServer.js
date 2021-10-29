const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.status(200).send('index page');
});

app.get('/about', (request, response) => {
    response.status(200).send('about page');
});

app.get('*', (request, response) => {
    response.status(404).send('404 page not found');
});

const port = 4000;
app.listen(port, () => {
    console.log(`web server running on port ${port}`);
});