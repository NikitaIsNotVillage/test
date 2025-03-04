import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { User } from "./users.model";
import { SequelizeModule } from "@nestjs/sequelize";


@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [SequelizeModule.forFeature([User])],
    exports: [UsersService, UsersModule]
})
export class UsersModule{}