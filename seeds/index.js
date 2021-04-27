const seedUsers = require('./seedUsers');
const seedPosts = require('./seedPosts');
const seedComments = require('./seedComment');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();