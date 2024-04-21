import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from './entities/module.entity';

@Injectable()
export class ModulesService {
  constructor(private prisma: PrismaService){}
  create(createModuleDto: CreateModuleDto) {
    return 'This action adds a new module';
  }

  async findAll() {
    const data = await this.prisma.module.findMany();
    return data.map(item => new Module(item.id, item.courseId, item.name, item.description, item.thumbnail, item.video, item.document, item.created_at));
  }

  async findFromCourse(courseId: number) {
    const data = await this.prisma.module.findMany({where: {courseId: courseId}});
    return data.map(item => new Module(item.id, item.courseId, item.name, item.description, item.thumbnail, item.video, item.document, item.created_at));
  }

  async findOne(id: number) {
    const item = await this.prisma.module.findFirst({where: {id: id}});
    if (item == null) throw new NotFoundException("Module not found!")
    return new Module(item.id, item.courseId, item.name, item.description, item.thumbnail, item.video, item.document, item.created_at);
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
