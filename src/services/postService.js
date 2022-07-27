const models = require('../database/models');

const postService = {
  async list() {
    const posts = await models.BlogPost.findAll({
      attributes: { exclude: ['UserId'] },
      include: 
      [
        { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: models.Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
},
};

module.exports = postService;
