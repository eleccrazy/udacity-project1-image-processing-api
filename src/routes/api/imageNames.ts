import express from 'express';
import imageProcessor from '../../imageProcessor';

const imageNames = express.Router();

imageNames.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const availableImages = await imageProcessor.allAvailableImageNames();
    let htmlResponse = `
        <h4>Available image Names</h4>
        <ul> `;
    availableImages.forEach((imageName: string): void => {
      htmlResponse = htmlResponse + `<li>${imageName}</li>`;
    });
    res.send(`${htmlResponse}</ul>`);
  }
);

export default imageNames;
