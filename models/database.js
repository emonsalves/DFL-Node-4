const databaseService = require('../services/database');

const getAllData = async () => {
    const consulta = "SELECT * FROM posts ORDER BY id ASC";
    const likemeList = await databaseService.query(consulta);
    return likemeList.rows;
}

const createNewData = async (titulo, url, descripcion) => {
    const id = Math.floor(Math.random() * 9999);
    const consulta = "INSERT INTO posts values ($1, $2, $3, $4, $5)";
    const values = [id, titulo, url, descripcion, 1];
    await databaseService.query(consulta, values);
}

const updateData = async (id) => {
    const consultaGet = "SELECT likes FROM posts WHERE id = $1"
    const values = [id]
    const foundSong = await databaseService.query(consultaGet, values)
    const consultaUpdate = "UPDATE posts SET likes = $2 WHERE id = $1"
    const valuesToChange = [id, foundSong.rows[0].likes + 1]
    await databaseService.query(consultaUpdate, valuesToChange)
}

const deleteData = async (id) => {
    consulta = "DELETE FROM posts WHERE id = $1";
    values = [id]
    await databaseService.query(consulta, values)
}

module.exports = { getAllData, createNewData, updateData, deleteData };
