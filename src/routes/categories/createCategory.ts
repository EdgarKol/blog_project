import express, { Request, Response} from 'express';
import { v4 as uuidV4 } from 'uuid';
import bunyan from 'bunyan';
import Category from '../../entities/Category';

const log = bunyan.createLogger({
    name: __filename,
    stream: process.stdout
})

const router = express.Router();

interface CategoryInput {
    title: string,
    content: string
}

router.post('/', async (req: Request, res: Response) => {
    try{
        let {
            title,
            content
        } = req.body as CategoryInput;
        const category = new Category();
        category.id = uuidV4();
        category.title = title;
        category.content = content;

        let newCategory = await category.save();
        if(!newCategory){
            throw new Error();
        }
        log.info({category: newCategory}, "Category was created successfully")
        return res.json(newCategory);
    }catch(error){
        log.error({error: error, input: req.body}, 'unable to create catecory');
        if (error instanceof Error){
            return res.json({
                error: 'unable to create new catecory',
                message: error.message
            });
        }
        return res.json({
            error: 'unable to create new catecory',
            message: 'unknown error'
        });
    }
});

export default router;