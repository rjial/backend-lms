import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Banner } from './entities/banner.entity';

@Injectable()
export class BannerService {
  constructor(private prisma: PrismaService){}
  create(createBannerDto: CreateBannerDto) {
    return 'This action adds a new banner';
  }

  async findAll() {
    const data = await this.prisma.banner.findMany();
    return data.map(item => new Banner(item.id, item.alt, item.src, item.created_at, item.deleted_at ?? undefined, item.updated_at ?? undefined));
  }

  async findOne(id: number) {
    const item = await this.prisma.banner.findFirst({where: {id: id}});
    if (item == null) throw new NotFoundException("Banner not found!");
    return new Banner(item.id, item.alt, item.src, item.created_at, item.deleted_at ?? undefined, item.updated_at ?? undefined);
  }

  update(id: number, updateBannerDto: UpdateBannerDto) {
    return `This action updates a #${id} banner`;
  }

  remove(id: number) {
    return `This action removes a #${id} banner`;
  }
}
