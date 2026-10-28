import { Router } from 'express';
import { getQuilomboInfo } from '../controllers/quilomboInfoController.js';

const router = Router();

// Rota GET para listar as informações do quilombo
router.get('/', getQuilomboInfo);

export default router;