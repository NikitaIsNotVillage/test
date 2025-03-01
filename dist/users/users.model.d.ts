import { Model } from "sequelize-typescript";
interface UserAttrs {
    username: string;
    password: string;
}
export declare class User extends Model<User, UserAttrs> {
    id: number;
    username: string;
    password: string;
}
export {};
