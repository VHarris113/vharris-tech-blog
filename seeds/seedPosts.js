const { Post } = require('../models');

const postData = [{
    title: '',
    content: '',
    user_id: '',
},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;