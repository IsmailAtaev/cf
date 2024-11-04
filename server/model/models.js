const sequelize = require('../database')
const { DataTypes } = require('sequelize')


const Role = sequelize.define("Role", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    permissions: {
        type: DataTypes.JSON, // Corrected the type declaration
        allowNull: false, // Not null should be written as 'allowNull: false'
    }
})

const User = sequelize.define('User', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    roleId: { type: DataTypes.UUID, allowNull: false },
    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, unique: true },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
})

const Category = sequelize.define("Category", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    parentId: { type: DataTypes.UUID, allowNull: true },
    name: { type: DataTypes.STRING, allowNull: false }
});

const Product = sequelize.define("Product", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT },
    categoryId: { type: DataTypes.UUID, allowNull: false },
    img: { type: DataTypes.ARRAY(DataTypes.STRING) }
});


// Setting up associations
Category.hasMany(Category, { foreignKey: 'parentId', as: 'subcategories' });
Category.belongsTo(Category, { foreignKey: 'parentId', as: 'parentCategory' });


Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

Role.hasMany(User, { foreignKey: 'roleId', as: 'roleId' })
User.belongsTo(Role, { foreignKey: 'roleId', as: 'userRoleId' })


module.exports = {
    Role,
    User,
    Category,
    Product,
}