import { CreateUserDto } from 'src/users/dto/createUserDto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    log(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    reg(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    private token;
    private valid;
}
