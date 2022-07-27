// const postService = require('../services/postService');
// const TokenMiddleware = require('../middlewares/tokenMiddleware');

// const usersController = {

//   async list(req, res) {
//     await TokenMiddleware.verifyToken(req.headers);
//     const postsIds = await postService.list();
//     const posts = await Promise.all(postsIds.map((id) => postService.getPostById(id)));
//     res.status(200).json(posts);
//   },

// };

// module.exports = usersController;
