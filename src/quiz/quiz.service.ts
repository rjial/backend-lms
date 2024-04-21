import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Quiz } from './entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(private prisma: PrismaService){}
  create(createQuizDto: CreateQuizDto) {
    return 'This action adds a new quiz';
  }

  async findAll() {
    const data = await this.prisma.quiz.findMany();
    return data.map(item => new Quiz(item.id, item.module_id, item.data, item.created_at, item.deleted_at ?? undefined, item.updated_at ?? undefined));
  }

  async findOne(id: number) {
    const item = await this.prisma.quiz.findFirst({where: {id: id}})
    if (item == null) throw new NotFoundException("Quiz not found!")
    return new Quiz(item.id, item.module_id, item.data, item.created_at, item.deleted_at ?? undefined, item.updated_at ?? undefined);
  }

  async findByModule(moduleId: number) {
    const data = await this.prisma.quiz.findMany({where: {module_id: moduleId}})
    return data.map(item => new Quiz(item.id, item.module_id, item.data, item.created_at, item.deleted_at ?? undefined, item.updated_at ?? undefined));
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
