import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import wowBisRoutes from './routes/wow/bisRoutes.js';
import dungeonRoutes from './routes/wow/dungeonRoutes.js';
import dungeonTipRoutes from './routes/wow/dungeonTipRoutes.js';
import spellRoutes from './routes/wow/spellRoutes.js';
import tierListRoutes from './routes/wow/tierListRoutes.js';
import homeViewRoutes from './routes/wow/homeViewRoutes.js';
import mythicDungeonRoutes from './routes/wow/mythicDungeonRoutes.js';
import commonBisRoutes from './routes/common/commonRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
// 使用 JSON 解析中间件
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(
  '/api/wow/assets',
  express.static(path.resolve(__dirname, 'assets/wow'))
);

app.use(
  '/api/common/assets',
  express.static(path.resolve(__dirname, 'assets/common'))
);
// 未匹配到头像时，使用默认头像
app.use('/api/common/assets', (req, res, next) => {
  if (req.url.includes('advice')) {
    const imagePath = path.resolve(__dirname, `assets/common${req.url}`);

    // 设置默认图片的路径
    const defaultImagePath = path.resolve(
      __dirname,
      'assets/common/advice/avatar/default.svg'
    );
    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.sendFile(defaultImagePath);
      }
    });
  } else {
    next();
  }
});

// 挂载用户路由
app.use('/api/wow', wowBisRoutes);
app.use('/api/wow', tierListRoutes);
app.use('/api/wow', spellRoutes);
app.use('/api/wow', dungeonRoutes);
app.use('/api/wow', homeViewRoutes);
app.use('/api/wow', dungeonTipRoutes);
app.use('/api/wow', mythicDungeonRoutes);
app.use('/api/common', commonBisRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
