import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', null, {
    host: "localhost",
    dialect: "mysql",
    password: ""
});
 
export default db;