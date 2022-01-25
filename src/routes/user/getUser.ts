
import express, { Request, Response } from 'express';
import User from '../../entities/users';
const router = express.Router();

// Find user by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ id: id });

    if (!user) {
      return res.send({ message: 'no user found with given ID' });
    }

    return res.send(user);
  } catch (error) {
    return res.send({
      error: 'Unable to create new user',
      message: 'unknown error'
    });
  }
});

export default router;