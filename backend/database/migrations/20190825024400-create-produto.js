/*
up, que é a função que indica o que modificar no banco de dados quando executarmos a migration e 
down, que funciona como um rollback, ou seja, tudo que for feito na up deve ser desfeito na down.
*/
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(20),
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING(60),
      },
      imgSrc: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Produtos');
  }
};