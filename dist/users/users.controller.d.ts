import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUserDto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(dto: CreateUserDto): Promise<import("./users.model").User>;
    getAll(): any;
    getById(id: number): any;
}
