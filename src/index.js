import app from './app.js'; // Importe a aplicação Express

// Defina a porta e inicie o servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); 
});