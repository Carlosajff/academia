const res = require("express");
const { Sequelize } = require("sequelize");
const sequelize = require("../db/db");
const Clients = require("../Models/clients");


module.exports = {
    async getAll(req, res) {
        const sequelize = new Sequelize("academia", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(clients)


    },

    async create(req, res){
        const sequelize = new Sequelize("academia", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Clients(sequelize, Sequelize.DataTypes).create({
            nome_clients: req.body.nome_clients, 
            numero_telefone: req.body.numero_telefone,
            cpf: req.body.cpf,
            endereco: req.body.endereco
            
        });
        res.status(200).send({
            message: "Clients cadastrado com sucesso"
        });
    },

    async update(req, res){
        const sequelize = new Sequelize("academia", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Clients(sequelize, Sequelize.DataTypes).update({
            nome_clients: req.body.nome_clients, 
            numero_telefone: req.body.numero_telefone,
            cpf: req.body.cpf,
            endereco: req.body.endereco
            
        },
        {
            where: { id: req.params.id }
        }
        );
    
            res.status(200).send("academia atuallizado com sucesso")
        },
        
    

    async delete(req, res){
    const sequelize = new Sequelize("academia", "root", "senac", {
        host: "localhost",
        dialect: "mysql"
    });
    await Clients(sequelize, Sequelize.DataTypes).destroy(
        {
            where: { id: req.params.id }
        }
    );
        res.status(200).send("academia excluido com sucesso")
    }

}

