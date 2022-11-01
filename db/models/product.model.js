const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';
const { CATEGORY_TABLE } = require('./category.model');

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    categoryId: {
        field: 'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORY_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Product extends Model {
    static associate(models) {
        this.belongsTo(models.Category, {
            as: 'category'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}


module.exports = { PRODUCT_TABLE, ProductSchema, Product }