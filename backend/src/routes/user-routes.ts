import { Router } from 'express';
import { protectRoute } from '../middleware/auth';
import { getUsers } from '../controller/user-controller';

const router = Router();

router.get('/', protectRoute, getUsers);

export default router;
