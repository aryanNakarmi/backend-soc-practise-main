import { User } from "../types/user.types";

export const users: User[] = [
  { id: "user1", username: 'john_doe', email: 'john@example.com', name: 'John Doe', age: 30 },
  { id: "user2", username: 'jane_smith', email: 'jane@example.com', name: 'Jane Smith', age: 25 },
];

export interface IUserRepository
{
    getAllUser(): User[];
    getUserById(id : string) : User|undefined;
    createUser(users: User): User;
    updateUserById(id: string, updatedUser: Partial<User>): User;
    deleteUser(id: string): User|undefined;

}

export class UserRepository implements IUserRepository{
    getAllUser(): User[] {
        return users;
    }
    getUserById(id: string): User | undefined {
        return users.find(u => u.id === id);   
    }
    createUser(newUser: User): User {
        users.push(newUser);
        return newUser;
    }
    updateUserById(id: string, updatedUser: Partial<User>): User | undefined {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) return undefined;

    users[userIndex] = {
      ...users[userIndex],
      ...updatedUser,
    };

    return users[userIndex];
    }
  
    deleteUser(id: string): User | undefined {
        const userIndex = users.findIndex(u=> u.id ===id);
        const deleteUser = users[userIndex];
        users.splice(userIndex, 1);
        return deleteUser;
    };

}