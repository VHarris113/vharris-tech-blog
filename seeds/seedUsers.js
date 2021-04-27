const { User } = require('../models');

const userData = [{
    username: 'Tony_Stark',
    password: 'tstark1995'

},
{
    username: 'Steve_Rogers',
    password: 'american1776'
},
{
    username: 'Natasha_Romanoff',
    password: 'russia1'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;