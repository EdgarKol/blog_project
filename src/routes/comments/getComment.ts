import express, { Request, Response } from 'express';
import PostComment from '../../entities/PostComment';
const router = express.Router();

// Find comment by id
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const comment = await PostComment.findOne({ id: id });

        if (!comment) {
            return res.json({
                message: 'Comment not found with given ID'
            })
        }
        return res.json(comment);
    } catch (error) {
        if (error instanceof Error) {
            return res.json({
                error: 'comment not found',
                message: error.message
            
        });
    }
    // unknown (typeorm error?)
    return res.json({
        error: 'Unable to create comment',
        message: 'unknown error'
    })
}
})
export default router;