const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('site'));

let lista = [
    {
        titulo: "Receita 1", 
        descricao: "ficticio",
        imagem: "https://getimage.fic.com",
        descimagem: "Imagem ficticia 1"
    },
    
    {
        titulo: "Receita 2", 
        descricao: "ficticio2",
        imagem: "https://getimage.fic.com",
        descimagem: "Imagem ficticia 2"
    },
];

app.get('/api/lista' , (req, res)=>{
    console.log(res);
    res.json(lista);
});

app.post('/api/lista', (req, res)=>{
    const novaReceita = req.body;
    lista.push(novaReceita);
    res.json({ status: "sucesso!"});
});

app.listen(3000, ()=> {
    console.log("Servidor escutando em http://localhost:3000");
});

