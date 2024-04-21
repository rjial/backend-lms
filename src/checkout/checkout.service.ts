import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Checkout } from './entities/checkout.entity';
import { verify } from 'crypto';

@Injectable()
export class CheckoutService {
  constructor(private prisma: PrismaService){}
  create(createCheckoutDto: CreateCheckoutDto) {
    return 'This action adds a new checkout';
  }

  async findAll() {
    const data = await this.prisma.checkout.findMany();
    return data.map(item => new Checkout(item.id, item.userId, item.courseId, item.payment_method, item.verify));
  }

  async findOne(id: number) {
    const item = await this.prisma.checkout.findFirst({where: {id: id}})
    if (item == null) throw new NotFoundException("Checkout not found"); 
    return new Checkout(item.id, item.userId, item.courseId, item.payment_method, item.verify);
  }

  update(id: number, updateCheckoutDto: UpdateCheckoutDto) {
    return `This action updates a #${id} checkout`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkout`;
  }
}
