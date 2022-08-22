const bp = require('body-parser');
const app = require('./app');
const productRote = require('./routers/productRoute');

require('dotenv').config();

const { PORT } = process.env;
// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.use(bp.json());
app.use('/products', productRote);
// app.use('/sales');

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
