import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const {skip, take} = req.query

        const posts = await Post.find({
            take: Number.isSafeInteger(take) ?  Number.parseInt(take as string) :20,
            skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string) :0,
            order:{
                createdAt: 'DESC'
            }
        })
        console.log(...posts)
        const postForUser = await Post.createQueryBuilder('post').select('post.*').innerJoin('post.author','author').getMany();
        
        res.send(postForUser)

    }catch (error) {}
    
});
export default router