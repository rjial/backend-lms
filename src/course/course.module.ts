import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import {PrismaModule} from "../prisma/prisma.module";
import {UserModule} from "../user/user.module";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
      PrismaModule,
      UserModule,
      AuthModule
  ],
  providers: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}
