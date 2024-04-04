import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {PrismaModule} from "../prisma/prisma.module";
import {UserModule} from "../user/user.module";
import {jwtSecret} from "../app.module";
import {JwtStrategy} from "./strategy/jwt.strategy";

@Module({
  imports: [
      PrismaModule,
      UserModule,
      PassportModule,
      JwtModule.register({
        secret: jwtSecret,
        signOptions: { expiresIn: "24h"}
      })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
    exports: [JwtStrategy]
})
export class AuthModule {}
