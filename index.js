const app = require('./app');
const productRote = require('./routers/productRoute');
require('dotenv').config();

const { PORT } = process.env;
// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.use('/products', productRote);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
