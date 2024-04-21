import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import { ReviewCourse } from './entity/review-course.entity';
import { CourseEntity } from './entity/course.entity';

@Injectable()
export class CourseService {
    constructor(private prisma: PrismaService) {}
    async findAllCourse() {
        return this.prisma.course.findMany();
    }

    async findCourse(id: number) {
        const item = await this.prisma.course.findUnique({where: {id: id}})
        if (item == null) throw new NotFoundException("Course Not Found!")
        return new CourseEntity(
            item.id,
            item.name,
            item.description,
            item.thumbnail as string,
            item.video as string,
            item.document as string,
            item.userCount,
            item.memberCount,
            item.finished,
            item.rating5,
            item.rating4,
            item.rating3,
            item.rating2,
            item.rating1,
            item.price,
            item.level,
            item.user_id,
            item.created_at,
            item.updated_at ?? undefined,
            item.deleted_at ?? undefined
        )
    }

    async getReviewCourse(courseId: number) {
        const data = await this.prisma.review.findMany({where: {courseId: courseId}})
        return data.map(item => new ReviewCourse(item.id, item.courseId, item.userId, item.description, item.rating))
    }
}
