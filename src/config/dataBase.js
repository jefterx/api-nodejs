import dotenv from 'dotenv';
dotenv.config();

import { Sequelize} from 'sequelize'; // Importar o sequelize

// Criar uma instância do Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions:{
    useUTC:false,
    dateStrings: true,
    typeCast: true
}
});

export default sequelize;