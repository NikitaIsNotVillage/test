import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { User } from "./users/users.model";
import { AuthModule } from './auth/auth.module';


@Module({
    providers: [],
    controllers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'nest_auth_prod',
            models: [User],
            autoLoadModels: true
          }),
          UsersModule,
          AuthModule
    ]
})
export class AppModule{}