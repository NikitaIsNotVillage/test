import { User } from "./users.model";
import { CreateUserDto } from "./dto/createUserDto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getUserByID(id: number): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    getUserName(username: string): Promise<User | null>;
}
