import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/createUserDto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    reg(dto: CreateUserDto): Promise<{
        token: string;
    }>;
}
