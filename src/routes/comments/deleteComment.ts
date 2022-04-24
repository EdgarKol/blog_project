import express, { Request, Response } from 'express';
import PostComment from '../../entities/PostComment';
import bunyan from 'bunyan';
const log = bunyan.createLogger({name: __filename});

const router = express.Router();

interface PostCommentDeleteInput {
    commentId: string;
}

router.delete('/', async(req: Request, res: Response) => {
    try{
        const {commentId } = req.body as PostCommentDeleteInput;
        const comment = await PostComment.findOne({where: { id: commentId}});

        if(!comment){
            return res.json({
                error: 'Unable to delete comment',
                message: 'No comment with given id found'
            });
        }
        const deleteComment = await comment.softRemove();
        log.info({PostComment: deleteComment}, 'Comment was deleted');
        return res.json(deleteComment);
   
    }catch(error){  
       
        if (error instanceof Error){
            return res.json({
                error: 'Unable to find comment',
                message: error.message
            });
        }
        return res.json({
            error: 'Unable to',
            message: 'unknown error'
        });
    }
});

export default router;