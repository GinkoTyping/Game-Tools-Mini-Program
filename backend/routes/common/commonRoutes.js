import express from 'express';
import { getTranslation } from '../../controller/common/translateController.js';
import {
  queryAccessCount,
  queryScrollInfo,
} from '../../controller/common/infoController.js';
import { queryAdviceList } from '../../controller/common/adviceController.js';

const router = express.Router();

router.post('/translate', getTranslation);
router.get('/access-count', queryAccessCount);
router.get('/scroll-info', queryScrollInfo);
router.get('/advice/list', queryAdviceList);

export default router;
