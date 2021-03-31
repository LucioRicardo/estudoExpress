const express = require('express');
const { v4:uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const projetos = [];

app.get('/projetos', (req, res) => {
    //const { title, owner } = req.query;
    
    return res.json(projetos);
});

app.post('/projetos', (req, res) => {
    const { title, owner } = req.body;

    const projeto = { id: uuidv4(), title, owner };

    projetos.push(projeto);

    return res.json(projeto);
});

app.put('/projetos/:id', (req, res) => {
    const params = req.params;

    console.log(params);
    
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
