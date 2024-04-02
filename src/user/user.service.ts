import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateUserDto} from "./dto/user-create.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

    findOne(id: number) {
        return this.prismaService.user.findUnique({where: {id: id}})
    }

    async create(user: CreateUserDto) {
        const hashPassword = await bcrypt.hash(
            user.password,
            10
        )

        return this.prismaService.user.create({
            data: {
                name: user.namee,
                email: user.email,
                password: hashPassword,
                secretKey: "",
                gender: user.gender == null ? "" : user.gender,
                expiredAt: new Date(),
                phone: user.phone,
                dot: (new Date(user.dot as string)).toISOString(),
                address: user.address,
                countryCode: user.countryCode,
                city: user.city,
                postalCode: user.postalCode,
                isAdmin: false,
                balance: 0,
                image: "lorem ipsum"
            }
        })
    }
}
