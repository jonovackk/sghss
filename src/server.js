// src/server.js
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Testa conexão com o banco
    await sequelize.authenticate();
    console.log('Conexão com o banco estabelecida com sucesso.');

    // Sincroniza modelos (por enquanto, sem forçar recriação)
    await sequelize.sync();
    console.log('Modelos sincronizados com o banco.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
}

startServer();
