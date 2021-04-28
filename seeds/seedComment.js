const { Comment } = require('../models');

const commentData = [{
    comment_text: "Upcoming results for this new product at Stark Industries",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "New training regime for incoming recruits. Hopefully Bruce can be a little nicer to the newbies.",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "Это было бы слишком легко перевести. Кто-то должен уметь это делать.",
    user_id: 3,
    post_id: 3
}
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;