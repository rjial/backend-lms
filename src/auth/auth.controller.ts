import {Body, Controller, Post} from '@nestjs/common';
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {AuthEntity} from "./entity/AuthEntity";
import {LoginDto} from "./dto/login.dto";
import {RegisterEntity} from "./entity/RegisterEntity";
import {RegisterDto} from "./dto/register.dto";

@Controller('auth')
@ApiTags("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @ApiOkResponse({type: AuthEntity})
    login(@Body() {email, password}: LoginDto) {
        return this.authService.login(email, password)
    }

    @Post("register")
    @ApiOkResponse({type: RegisterEntity})
    register(@Body() {email, password, name, balance, gender, city, dot, countryCode, postalCode, address, phone, image}: RegisterDto) {
        console.log(email, password, name, balance, gender, city, dot, countryCode, postalCode, address, phone, image)
        // return this.authService.register(email, password, name, balance, gender, city, dot, countryCode, postalCode, address, phone, image)
    }
}
