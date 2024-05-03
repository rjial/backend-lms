import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import { ReviewCourse } from './entity/review-course.entity';
import { CourseEntity } from './entity/course.entity';
import { Lesson } from 'src/lesson/entities/lesson.entity';

@Injectable()
export class CourseService {
    constructor(private prisma: PrismaService) {}
    async findAllCourse() {
        const data = await this.prisma.course.findMany()
        return data.map<CourseEntity>(item => {
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                thumbnail: item.thumbnail as string,
                video: item.video as string,
                document: item.document as string,
                userCount: item.userCount,
                memberCount: item.memberCount,
                finished: item.finished,
                rating5: item.rating5,
                rating4: item.rating4,
                rating3: item.rating3,
                rating2: item.rating2,
                rating1: item.rating1,
                price: item.price,
                level: item.level,
                user_id: item.user_id,
                created_at: item.created_at,
                updated_at: item.updated_at ?? undefined,
                deleted_at: item.deleted_at ?? undefined
            }
        });
    }

    async findCourse(id: number) {
        const courseId: number = Number(id)
        const item = await this.prisma.course.findUnique({where: {id: courseId}})
        if (item == null) throw new NotFoundException("Course Not Found!")
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            thumbnail: item.thumbnail as string,
            video: item.video as string,
            document: item.document as string,
            userCount: item.userCount,
            memberCount: item.memberCount,
            finished: item.finished,
            rating5: item.rating5,
            rating4: item.rating4,
            rating3: item.rating3,
            rating2: item.rating2,
            rating1: item.rating1,
            price: item.price,
            level: item.level,
            user_id: item.user_id,
            created_at: item.created_at,
            updated_at: item.updated_at ?? undefined,
            deleted_at: item.deleted_at ?? undefined
        } as CourseEntity
    }

    async getReviewCourse(courseId: number) {
        const data = await this.prisma.review.findMany({where: {courseId: courseId}})
        return data.map(item => new ReviewCourse(item.id, item.courseId, item.userId, item.description, item.rating))
    }

    async getLessonsFromCourse(courseId: number) {
        const data = await this.prisma.lesson.findMany({where: {courseId: Number(courseId)}})
        return data.map(item => new Lesson(
            item.courseId,
            item.name,
            item.description,
            item.video,
            item.document,
            item.thumbnail,
            item.created_at.toISOString()
        ))
    }
}
