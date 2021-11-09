const { sequelize,DataTypes } = require('../init');

const Admin = sequelize.define('Admin', {
    // 在这里定义模型属性
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull 默认为 true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    create_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    update_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    // state: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
}, {
    // 这是其他模型参数
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    tableName: 'admin'
});

module.exports = Admin