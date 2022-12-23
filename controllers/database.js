const modelDatabase = require('../models/database.js');

const getAllData = async (req, res) => {
    const listLike = await modelDatabase.getAllData();
    res.status(200).send(listLike);
}

const createNewData = async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    await modelDatabase.createNewData(titulo, url, descripcion);
    res.status(200).send();
}

const updateData = async (req, res) =>{
    const { id } = req.params
    await modelDatabase.updateData(id);
    res.status(200).send();
}

const deleteData = async (req, res) =>{
    const { id } = req.params
    await modelDatabase.deleteData(id);
    res.status(200).send();
}

module.exports = { getAllData, createNewData, updateData, deleteData };
//FALTA VALIDAR DATOS RECORDAR FRONT ES MODIFICABLE 