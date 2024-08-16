import express from 'express';
const app = express();

app.use(express.json());

app.post('/cadastro', (req, res) =>{
    const {nome, email, senha} = req.body;

    if (!nome ||email ||senha){
        return res.status(400).json({ mensagem: "Por favor, coloque nome, email e senha."});
    }








    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
});