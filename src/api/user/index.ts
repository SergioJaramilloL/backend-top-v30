import { Router } from 'express';

import {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getUserHandler,
  updateUserHandler,
} from './user.controller';
import { isAuthenticated } from '../../auth/auth.controller';
import { hasRole } from '../../auth/auth.controller';

const router = Router();

// /api/users -> GET
router.get('/', isAuthenticated, hasRole(['ADMIN']), getAllUserHandler);

// /api/users -> POST
router.post('/', createUserHandler);

// /api/users/single -> GET
router.get('/single', isAuthenticated, getUserHandler);

// /api/users/ -> DELETE
router.delete('/', isAuthenticated, deleteUserHandler);

// /api/users/ -> PATCH
router.patch('/', isAuthenticated, updateUserHandler);

export default router;
