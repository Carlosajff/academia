"use strict"

const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Clients extends Model{}

    Clients.init({
        nome_clients: DataTypes.STRING(30),
        numero_telefone: DataTypes.STRING(10),
        cpf: DataTypes.STRING(30),
        endereco: DataTypes.STRING(100),
    },
    {   sequelize,
        modelName: "clients",
        timestamps: false 
    });

return Clients
};