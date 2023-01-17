import { Sequelize } from "sequelize";

const db = new Sequelize('cobalogin', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;