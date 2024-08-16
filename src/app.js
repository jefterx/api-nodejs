import express, { json } from 'express';
const app = express();

app.use(express.json()); // Para parsear JSON no corpo das requisições


app.get('/', (req, res)=> {
    res.status(200).send('API Está funcionando corretamente');
});



export default app;
