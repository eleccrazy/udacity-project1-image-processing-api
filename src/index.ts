import express from 'express';
import router from './routes/index';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

app.use('/api', router);

app.listen(port, (): void => {
  const thumbPath = path.resolve(__dirname, '../assets/thumbs');

  if (!fs.existsSync(thumbPath)) {
    fs.mkdirSync(thumbPath);
  }
  console.log(`Check it on port ${port}`);
});

export default app;
