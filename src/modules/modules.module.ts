import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    CourseModule
  ],
  controllers: [ModulesController],
  providers: [ModulesService],
})
export class ModulesModule {}
