const { Post } = require('../models');

const postData = [{
    title: 'New toys',
    content: 'Updates from Stark Industries are upon us.',
    user_id: 1

},
{
    title: 'Training newbies',
    content: 'Please take a look at the prepped information for the upcoming recruits.',
    user_id: 2
},
{
    title: '...',
    content: '....',
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;