import express from 'express';
import imageProcessor from '../../imageProcessor';
import path from 'path';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

const imageRouter = express.Router();

imageRouter.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const queryString = req.query;
      const filename = queryString.filename as unknown as string;
      const height = queryString.height as unknown as string;
      const width = queryString.width as unknown as string;

      if (!filename || !height || !width) {
        res
          .status(400)
          .send(
            'Please make sure that you have passed all the required params correctly.(filename, width, and height of the image)'
          );
        return;
      }
      const resizedImagePath = `assets/thumbs/${filename}_${width}_${height}.jpg`;
      if (!fs.existsSync(resizedImagePath)) {
        const thumbImage = await imageProcessor.resizedImage(
          filename,
          parseInt(width),
          parseInt(height)
        );
        await fsPromises.writeFile(resizedImagePath, thumbImage);
      }
      res.sendFile(path.resolve(resizedImagePath));
    } catch (err) {
      res.status(400).send('Image not found!');
    }
  }
);

export default imageRouter;
