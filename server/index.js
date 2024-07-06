const express = require('express');
const app = express();
const port = 5173;

app.use(express.json());

app.get('/registration', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/registration', (req, res) => {
  const data = req.body;
  if (!data.email || !data.password) {
    return res.status(400).json({ error: 'Campos obrigatórios não preenchidos.' });
  }
  res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
