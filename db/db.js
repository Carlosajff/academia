const Sequelize = require("sequelize")

const sequelize = new Sequelize("academia", "root", "senac", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada com sucesso")
})
.catch(function(){
    console.log("Erro : Não foi possivel realizar a conexão")
});

module.exports = sequelize;