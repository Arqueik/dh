const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(config);


sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });

  Model.exports =sequelize;