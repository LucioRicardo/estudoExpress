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
    const { id } = req.params;
    const { title, owner } = req.body;

    const projetoIndex = projetos.findIndex(projeto => projeto.id === id);

    if(projetoIndex < 0){
        return res.status(400).json({error : 'Projeto não encontrado'})
    }

    const projeto = { id, title, owner };

    projetos[projetoIndex] = projeto;
    
    return res.json(projeto);
});

app.delete('/projetos/:id', (req, res) => {
    const { id } = req.params;

    const projetoIndex = projetos.findIndex(projeto => projeto.id === id);

    if(projetoIndex < 0){
        return res.status(400).json({ error: 'Projeto não encontrado'});
    }

    projetos.splice(projetoIndex, 1);
    
    return res.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor rodando!')
});
