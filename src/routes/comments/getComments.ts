import express, { Request, Response} from 'express';
import PostComment from '../../entities/PostComment';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const { skip, take } = req.query;

        const comments = await PostComment.find({
            take: Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20,
            skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0           
         });
        
    if(!comments){
    return res.json({
        message: 'no comment found with given ID'
    })
}
        return res.json({comments: comments.map((comment) => comment.commentInfo())})
 } catch (error){
        if(error instanceof Error){
            return res.json({
                error: 'Unable to find comments',
                message: error.message
            });
        }
        return res.json({
            error: 'Unable to find comments',
            message: 'unknown error'
        });
    }
    
});

export default router;