const modelDatabase = require('../models/database.js');

const getAllData = async (req, res) => {
    const listLike = await modelDatabase.getAllData();
    res.status(200).send(listLike);
}

const createNewData = async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    if (!titulo || !url || !descripcion ||
        typeof titulo !== 'string' || typeof url !== 'string' || typeof descripcion !== 'string') {
        return res.status(400).json({ message: "Campo vacio o incorrecto" });
    }
    await modelDatabase.createNewData(titulo, url, descripcion);
    res.status(200).send();
}

const updateData = async (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(404).json({
            message: "Error no hay ID definida"
        })
    }
    await modelDatabase.updateData(id);
    res.status(200).send();
}

const deleteData = async (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(404).json({
            message: "Error no hay ID definida"
        })
    }
    await modelDatabase.deleteData(id);
    res.status(200).send();
}

module.exports = { getAllData, createNewData, updateData, deleteData };