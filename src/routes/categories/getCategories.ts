import express, { Request, Response} from 'express';
import Category from '../../entities/Category';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const { skip, take } = req.query;
        const categories = await Category.find({
            take: Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20,
            skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0
        })
        if(!categories){
            return res.json({ 
                message: 'No comments found'
            })
        }
        return res.json({ categories: categories.map((category) => category.CategoryInfo())})
    }catch(error) {
        if(error instanceof Error){
            return res.json({
                error: 'Unable to find categories',
                message: error.message
            });
        }
        return res.json({
            error: 'Unable to find categories',
            message: 'Unknown error'
        })
    }
});

export default router;