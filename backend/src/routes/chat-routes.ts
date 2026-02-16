import { Router } from 'express';
import { protectRoute } from '../middleware/auth';
import { getChats, getOrCreateChat } from '../controller/chat-controller';

const router = Router();

router.use(protectRoute);

router.get('/', getChats);
router.post('/with/:participantId', getOrCreateChat);

export default router;
