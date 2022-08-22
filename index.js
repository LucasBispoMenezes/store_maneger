const express = require('express');
const app = require('./app');
const productRote = require('./routers/productRoute');

require('dotenv').config();

const { PORT } = process.env;
console.log(process.env.PORT);
// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto
app.use(express.json());
app.use('/products', productRote);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
