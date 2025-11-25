import { Request, Response} from "express";
import { CreateUserDTO } from "../dtos/user.dto";
import { IUserRepository, UserRepository } from "../repositories/user.repository";
import { User } from "../types/user.types";

let userRepository: IUserRepository = new UserRepository();

export class UserService{
    getUser = (): User[]=>{
        let transformedUsers = userRepository
        .getAllUser()
        return transformedUsers;
    }
    createUser= (userData: CreateUserDTO): User =>{
        const newUser: User= {...userData};
        let existingUser = userRepository
        .getUserById(newUser.id);
        if(existingUser){
            throw new Error("User Already Exists");
        }
        return userRepository.createUser(newUser);
    }
    getUserById = (id:string, res: Response): User|undefined=>{
        const user= userRepository.getUserById;
        if(!user){
            return res.status(404).json.({message:"})
        }
        
    }
    updateUser = (id: string):
}