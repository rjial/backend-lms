import {HttpException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {AuthEntity} from "./entity/AuthEntity";
import {PrismaService} from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";
import {UserService} from "../user/user.service";
import {CreateUserDto} from "../user/dto/user-create.dto";
import {jwtSecret} from "../app.module";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService, private userService: UserService) {}

    async login(email: string, password: string): Promise<AuthEntity> {
        const user = await this.prisma.user.findUnique({where: {email: email}})

        if (!user) {
            throw new NotFoundException(`User not found for ${email}`)
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            throw new UnauthorizedException("Invalid password")
        }

        return {
            accessToken: this.jwt.sign({userId: user.id, email: user.email}, { secret: jwtSecret})
        }
    }
    async register(email: string, password: string, namee: string, balance: number, username: string, gender: string, city: string, dot: string, countryCode: string, postalCode: string, address: string, phone: string, image: string) {
        const createdUser = await this.userService.create(new CreateUserDto(email, password, gender, username, namee, phone, dot, address, countryCode, city, postalCode, balance, image))

        if (!(createdUser.id > 0)) {
            throw new HttpException("Permintaan error", 500)
        }

        return {
            email: createdUser.email,
            name: createdUser.name
        }
    }
}

