import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';
import { CheckoutModule } from './checkout/checkout.module';
import { QuizModule } from './quiz/quiz.module';
import { BannerModule } from './banner/banner.module';
import { EventModule } from './event/event.module';
import { LessonModule } from './lesson/lesson.module';

export const jwtSecret = "secret123"

@Module({
  imports: [AuthModule, PrismaModule, UserModule, CourseModule, CategoryModule, CheckoutModule, QuizModule, BannerModule, EventModule, LessonModule]
})
export class AppModule {}
