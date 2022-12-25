import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';

async function resizedImage(
  filename: string,
  width: number,
  height: number
): Promise<Buffer> {
  try {
    return await sharp(
      path.resolve(__dirname, `../assets/full/${filename}.jpg`)
    )
      .resize({
        width: width,
        height: height,
        fit: sharp.fit.cover
      })
      .toBuffer();
  } catch (err) {
    return Promise.reject();
  }
}

async function allAvailableImageNames(): Promise<string[]> {
  try {
    return (
      await fsPromises.readdir(path.resolve(__dirname, '../assets/full'))
    ).map((filename: string): string => filename.split('.')[0]);
  } catch (err) {
    return [];
  }
}

export default { resizedImage, allAvailableImageNames };
