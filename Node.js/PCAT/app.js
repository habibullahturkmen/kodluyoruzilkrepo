const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const photo = {
        id: 2,
        name: "photo name",
        description: "photo description"
    }
    res.send(photo);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});