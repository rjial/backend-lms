import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    CourseModule
  ],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
