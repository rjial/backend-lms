import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService){}
  create(createEventDto: CreateEventDto) {
    return 'This action adds a new event';
  }

  async findAll() {
    const data = await this.prisma.event.findMany()
    return data.map(item => new Event(item.id, item.name, item.user_id, item.description, item.created_at, item.deleted_at ?? undefined, item.updated_at ?? undefined));
  }

  async findOne(id: number) {
    const item = await this.prisma.event.findFirst({where: {id: id}})
    if (item == null) throw new NotFoundException("Event not found!");
    return new Event(item.id, item.name, item.user_id, item.description, item.created_at, item.deleted_at ?? undefined, item.updated_at ?? undefined);
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
