import express, { Request, Response} from 'express';
import Category from '../../entities/Category';
import bunyan from 'bunyan'
const log = bunyan.createLogger({name: __filename});

const router = express.Router();

interface CategoryDeleteInput{
    categoryId: string;
}

router.delete('/', async(req: Request, res: Response) =>{
    try{
        const {categoryId} = req.body as CategoryDeleteInput;
        const category = await Category.findOne({where:{ id: categoryId }});

        if(!category){
            return res.json({
                error: 'Unable to delete category',
                message: 'No category with given id found'
            });
        }
        const deleteCategory = await category.softRemove();
        log.info({Category: deleteCategory}, 'Category was deleted');
        return res.json({deleteCategory})
    }catch(error){
        if (error instanceof Error) {
            return res.json({
                error: 'Unable to find category',
                message: error.message
            });
        }
        return res.json({
            error: 'Unable to find categories',
            message: 'unknown error'
        });
    }
});
export default router;