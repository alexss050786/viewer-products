module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        descricao: DataTypes.STRING,
        imgSrc: DataTypes.STRING
    });



    return Produto;
}