import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class CourseService {
    constructor(private prisma: PrismaService) {}
    async findAllCourse() {
        return this.prisma.course.findMany();
    }

    async findCourse(id: number) {
        return this.prisma.course.findUnique({where: {id: id}})
    }
}
