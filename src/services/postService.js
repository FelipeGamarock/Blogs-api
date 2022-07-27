// const models = require('../database/models');

// const getCategories = async (post) => {
//   const categoriesIds = await models.PostCategory.findAll({
//     where: { postId: post.id },
//     raw: true,
//   });
//   const categories = await Promise.all(categoriesIds.map(({ categoryId }) => (
//     models.Category.findOne({ where: { id: categoryId }, raw: true })
//   )));
//   return categories;
// };

// const postService = {
//   async getPosts() {
//     const posts = await models.BlogPost.findAll({ attribute: { include: ['id'] }, raw: true });
//     const postsId = posts.map((item) => item.id);
//     return postsId;
//   },

//   async getPostById(id) {
//     const post = await models.BlogPost.findOne({ where: { id }, raw: true });
//     if (!post) {
//       const error = new Error('Post does not exist');
//       error.statusCode = 404;
//       throw error;
//     }
//     const user = await models.User.findOne({
//       where: { id: post.userId },
//       raw: true,
//       attributes: { exclude: ['password'] },
//     });
//     const categories = await getCategories(post);
//     post.user = user;
//     post.categories = categories;
//     return post;
//   },
// };

// module.exports = postService;
