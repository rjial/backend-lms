import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';
import { ModulesModule } from './modules/modules.module';
import { CheckoutModule } from './checkout/checkout.module';
import { QuizModule } from './quiz/quiz.module';
import { BannerModule } from './banner/banner.module';
import { EventModule } from './event/event.module';

export const jwtSecret = "secret123"

@Module({
  imports: [AuthModule, PrismaModule, UserModule, CourseModule, CategoryModule, ModulesModule, CheckoutModule, QuizModule, BannerModule, EventModule]
})
export class AppModule {}
