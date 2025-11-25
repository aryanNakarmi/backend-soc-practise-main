import { Request, Response} from "express";
import { CreateUserDTO } from "../dtos/user.dto";
import { UserService } from "../services/user.service";import { User } from "../types/user.types";

const userService = new UserService();

export class UserController {
    createUser = (req:Request,res:Response)=>{
        try{
            const validation = CreateUserDTO.safeParse(req.body);
            if(!validation.success){
                return res.status(400).json({errors:validation.error});
            }
            const {id, username, email, name} =validation.data;
            const newUser: User = userService.createUser({ id, username, email, name });
            return res.status(201).json(newUser);
        }catch(err: Error|any){
            return res.status(500).json({error:err.message ?? "Internal Server Error"});
        }
    };
    getUsers = (req:Request , res:Response)=>{
        const return_user: User[]= userService.getUser();
        
        res.status(200).json(return_user);
    };
    getUserById = (req: Request,res:Response)=>{
        const userId = req.params.userid;
        const return_userId= userService.getUserById(userId);
        if(!return_userId){
            return res.status(404).json({message: "User not found"});
        }
    }
    updateUser = (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const updatedData = req.body;

      return userService.updateUserById =(id, updatedData, res);
    } catch (err: Error | any) {
      return res
        .status(500)
        .json({ error: err.message ?? "Internal Server Error" });
    }
  };
    deleteUser = (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      return userService.deleteUserById(id, res);
    } catch (err: Error | any) {
      return res
        .status(500)
        .json({ error: err.message ?? "Internal Server Error" });
    }
  };
}