import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createUserDto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {


    constructor(private usersService: UsersService, private jwtService: JwtService){}

    async log(dto: CreateUserDto){
        const user = await this.valid(dto)
        return this.token(user)
    }
    async reg(dto: CreateUserDto){
        const nouser = await this.usersService.getUserName(dto.username)
        if (nouser) { throw new HttpException('err', HttpStatus.BAD_REQUEST) }
        const hash = await bcrypt.hash(dto.password, 4);
        const user = await this.usersService.createUser({...dto, password: hash})
        return this.token(user)
    }

    //Костыль
    private async token(user: User){
        const payload = {username: user.username,id: user.id}
        return{
            token: this.jwtService.sign(payload)
        }
    }
    private async valid(dto: CreateUserDto){
        const user = await this.usersService.getUserName(dto.username)
        if (!user) {
            throw new UnauthorizedException({message: 'ERR'})
        }
        const password = await bcrypt.compare(dto.password, user.password)
        return user;
    }
}
