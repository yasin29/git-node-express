const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('WOW, Hello from second node server hahaha')
});

const users = [
    { id: 0, name: "Yasin1", phone: '012234234423' },
    { id: 1, name: "Yasin", phone: '012234234423' },
    { id: 2, name: "Yasi", phone: '012234234423' },
    { id: 3, name: "Yas", phone: '012234234423' },
    { id: 4, name: "Ya", phone: '012234234423' }
]

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    res.json(newUser)
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummy Fazli');
});

app.listen(port, () => {
    console.log('Listening to port', port)
})