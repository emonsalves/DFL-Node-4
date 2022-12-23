![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white&style=for-the-badge)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)
![NPM ](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white&style=for-the-badge)
![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?logo=postgresql&logoColor=white&style=for-the-badge)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white&style=for-the-badge)
# DFL-Node-4
## DESARROLLO
Crear un servidor que disponibilice las rutas PUT Y DELETE para consultas y guardar los posts en una base de datos PostgreSQL con paquete pg.
El FRONT esta diseñado con REACT incluye las consultas HTTP a un servidor local en el puerto 3000 con las rutas correspondientes.
Para iniciar, ocupa los siguientes comandos en SQL. 

```
CREATE DATABASE likeme;
```

```
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);
```
## REQUERIMIENTOS
1. Agregar una ruta PUT en una API REST y utilizarla para modificar registros en una tabla alojada en PostgreSQl.
2. Agregar una ruta DELETE en una API REST y utilizarla para eliminar registros en una tabla alojada en PostgreSQL.
3. Capturar los posibles errores en una consulta SQL realizada con el paquete pg usando la sentencia try catch.

## Instalación

```$npm install
$npm install
```

## Levantar Server

```$npm run dev
$npm run dev
```

## Sitio Web Server
```
http://localhost:3000/
```
