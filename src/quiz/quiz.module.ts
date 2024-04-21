import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ModulesModule } from 'src/modules/modules.module';

@Module({
  imports: [
    PrismaModule,
    ModulesModule
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
