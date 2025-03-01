import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUserDto";


@Controller('/users')
export class UsersController{

    constructor(private usersService: UsersService){}
    @Post()
    createUser(@Body() dto: CreateUserDto){
        return this.usersService.createUser(dto)
    }

    @Get('/all')
    getAll(){
        return this.getAll()
    }

    @Get('/:id')
    getById(@Param('id') id: number){
        return this.getById(id)
    }
}