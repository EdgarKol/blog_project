import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
import bunyan from 'bunyan';
const log = bunyan.createLogger({name: __filename});

const router = express.Router();

interface PostDeleteInput{
    postId: string;
}

router.delete('/', async (req: Request, res: Response) => {
    try {
        const {postId } = req.body as PostDeleteInput;
        const post = await Post.findOne({where: {id: postId}});

        if(!post){
            return res.json({
                error: 'Unable to delete post',
                message: 'No post with given id'
            });
        }
        const deletePost = await post.softRemove();
        log.info({post: deletePost}, 'Post deleted successfully');

        return res.json(deletePost);
    }catch (error) {
        log.error(error, 'Error deleting post');
        if(error instanceof Error){
            return({
            error: 'Unable to find post',
            message: error.message
        });
        }
        return res.json({
            error: 'Unable to delete post',
            message: 'unknown error'
        });
    }
})
export default router;