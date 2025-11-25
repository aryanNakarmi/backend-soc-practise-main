import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userController = new UserController();
const router: Router = Router();


router.get('/',userController.getUsers);
router.get('/:id',userController.getUserById);
router.post('/',userController.createUser);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

export default router;