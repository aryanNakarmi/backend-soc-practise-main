
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
    getUserById = (id:string): User|undefined=>{

        return userRepository.getUserById(id);
        
    }
    updateUser = (id: string, updatedUser: Partial<User>)=>{
        const existingUser = userRepository.getUserById(id);
        if (!existingUser) {
            throw new Error("User Not Found");
        }
        if (updatedUser.username) {
            const existsUserByUsername = userRepository
                .getAllUsers()
                .find((u) => u.username === updatedUser.username && u.id !== id);

        if (existsUserByUsername) {
               throw new Error("User already Exists");
            }
            }



        
    }
}