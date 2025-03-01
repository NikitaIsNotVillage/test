import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/createUserDto";


@Injectable()
export class UsersService{
    constructor(@InjectModel(User) private userRepository: typeof User){}

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        return user;
    }
    async getUserByID(id: number){
        const userId = await this.userRepository.findOne({where:{id}, include:{all:true}});
        return userId;
    }
    async getAllUsers(){
        const users = await this.userRepository.findAll({include:{all:true}});
        return users;
    }
    //auth
    async getUserName(username: string){
        const user = await this.userRepository.findOne({where: {username}, include: {all: true}})
        return user;
    }
}