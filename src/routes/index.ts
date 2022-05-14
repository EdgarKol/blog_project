import express from 'express';
import fs from 'fs';
import createUser from './users/createUser';
import getUser from './users/getUser';
import getUsers from './users/getUsers';
import deleteUser from './users/deleteUser';
import getPost from './posts/getPost';
import getPosts from './posts/getPosts';
import createPost from './posts/createPost';
import deletePost from './posts/deletePost';
import getComment from './comments/getComment';
import getComments from './comments/getComments';
import createComment from './comments/createComment';
import deleteComment from './comments/deleteComment';
import getCategories from './categories/getCategories';
import createCategory from './categories/createCategory';
import deleteCategory from './categories/deleteCategory';
const router = express.Router();
// var userRoutes: string[] = [];

// fs.readdirSync(__dirname + '/user').forEach(function (file) {
//   router.use('/users', async () => {
//     return await import(__dirname.concat('\\user\\').concat(file));
//   });
// });
// console.log(userRoutes.toString());

router.use('/users', [createUser, getUser, getUsers, deleteUser]);
router.use('/posts', [createPost, getPost, getPosts, deletePost]);
router.use('/comments', [createComment, getComments, getComment, deleteComment]);
router.use('/categories', [createCategory, getCategories, deleteCategory]);
router.delete('/deletePost/:id', [deletePost]);
export default router;