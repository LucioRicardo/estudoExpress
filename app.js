const express = require('express');
const app = express();

// console.log(app);

app.get('/projetos', (req, res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.post('/projetos', (req, res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projetos/:id', (req, res) => {
    return res.json([
        'Projeto 51',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projetos/:id', (req, res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.listen(3000, () => {
    console.log('Servidor rodando!')
});
