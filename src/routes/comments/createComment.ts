import express, { Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import bunyan from 'bunyan';
import PostComment from '../../entities/PostComment';
const log = bunyan.createLogger({
    name: __filename,
    stream: process.stdout
})

const router = express.Router();

interface PostCommentInput {
    title: string;
    content: string;
}

router.post('/', async (req: Request, res: Response) => {
    try {
        let { 
            title,
            content
        } = req.body as PostCommentInput

        const comment = PostComment.create({
            id: uuidV4(),
            title: title,
            content: content,
            published: false
        });
        console.log(comment);
        const newComment = await comment.save();
        if (!newComment) {
            throw new Error();
        }
        log.info({ PostComment: newComment }, 'New comment was created');

        return res.json(newComment)
    } catch (error) {
        log.error({ error: error, input: req.body }, 'Unable to create comment');

        if (error instanceof Error) {

            return res.json({
                error: 'Unable to create comment',
                message: error.message
            });
        }
        return res.json({
            error: 'Unable to create comment',
            message: 'unknown error'
        })
    }
})

export default router;