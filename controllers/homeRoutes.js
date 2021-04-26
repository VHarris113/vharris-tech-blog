const sequelize = require('../config/connection');
const { Post, User, Comment} = require('../models');
const router = require('express').Router();
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at',
        ],
        include: 
    })
})