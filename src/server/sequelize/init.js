const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize('zhangpingcloud', 'root', 'Ping@1127', {
    host: '42.192.86.44',
    port: 3308,
    dialect:  'mysql',/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
    timezone: '+08:00'
});
(async function(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}())

module.exports = {
    sequelize,DataTypes
}