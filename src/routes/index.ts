import express from 'express';
import imageRouter from './api/imageRouter';
import imageNames from './api/imageNames';

const router = express.Router();
router.use('/images', imageRouter);
router.use('/available', imageNames);

router.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Api routes is working');
});

export default router;
