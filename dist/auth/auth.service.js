"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async log(dto) {
        const user = await this.valid(dto);
        return this.token(user);
    }
    async reg(dto) {
        const nouser = await this.usersService.getUserName(dto.username);
        if (nouser) {
            throw new common_1.HttpException('err', common_1.HttpStatus.BAD_REQUEST);
        }
        const hash = await bcrypt.hash(dto.password, 4);
        const user = await this.usersService.createUser({ ...dto, password: hash });
        return this.token(user);
    }
    async token(user) {
        const payload = { username: user.username, id: user.id };
        return {
            token: this.jwtService.sign(payload)
        };
    }
    async valid(dto) {
        const user = await this.usersService.getUserName(dto.username);
        if (!user) {
            throw new common_1.UnauthorizedException({ message: 'ERR' });
        }
        const password = await bcrypt.compare(dto.password, user.password);
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map