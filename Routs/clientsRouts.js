const express = require("express");
const sequelize = require("../db/db");
const router = express.Router();

const ClientsController = require("../Controllers/Clients")


router.get("/", (req, res) => {
  ClientsController.getAll(req, res)
});


//cria um produto
router.post("/", (req,res) => {
  ClientsController.create(req, res)
});


// PUT atualiza toda estrutura do objeto
// PATCH atualizar parte do registro

router.patch("/:id", (req, res) => {
   ClientsController.update(req, res)
});


router.delete("/:id", (req, res) => {
   ClientsController.delete(req, res)
});

module.exports = router;

