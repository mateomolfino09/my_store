const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./costumer.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, Order_Product_Schema } = require('./order-product.model');


function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderProduct.init(Order_Product_Schema, OrderProduct.config(sequelize));


    Customer.associate(sequelize.models);
    Product.associate(sequelize.models);
    User.associate(sequelize.models);
    Category.associate(sequelize.models);
    Order.associate(sequelize.models);
}

module.exports = setupModels;