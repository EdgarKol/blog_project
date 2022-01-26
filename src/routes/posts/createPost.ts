import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
import {v4 as uuidV4} from 'uuid';
import User from '../../entities/User';
const router = express.Router();

interface PostInput{
    authorId: string;
    title: string;
    summary: string;
    content: string;
}

router.post('/', async (req: Request, res: Response) => {
const {authorId, title, summary, content} = req.body;

    const user = await User.findOne({id: authorId})
    if(!user){
        res.send({message: 'No such user found'})
    }
    const post = Post.create({
        id: uuidV4(),
        authorId: authorId,
        title: title,
        summary: summary,
        content: content,
        published: false
    });

   const newPost = post.save();
   if(!newPost){
       console.log({error:'unable to save post'})
       return res.send()
   }
})

export default router