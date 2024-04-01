import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {UserService} from "../../user/user.service";
import {jwtSecret} from "../../app.module";
import {UnauthorizedException} from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret,
        });
    }

    async validate(payload: {userId: number, email: string}) {
        const user = await this.userService.findOne(payload.userId)

        if (!user) {
            throw new UnauthorizedException()
        }

        return user
    }

}