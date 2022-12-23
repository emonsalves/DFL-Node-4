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
    const consulta = `SELECT likes FROM posts WHERE id = ${id}`
    const foundSong = await databaseService.query(consulta)
    const consulta2 = `UPDATE posts SET likes = $1 WHERE id = ${id}`
    const values = [foundSong.rows[0].likes + 1]
    await databaseService.query(consulta2, values)
}


const deleteData = async (id) => {
    consulta = `DELETE FROM posts WHERE id= ${id}`
    await databaseService.query(consulta)
}

module.exports = { getAllData, createNewData, updateData, deleteData };
