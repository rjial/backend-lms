import {Controller, Get, Param, UseGuards} from '@nestjs/common';
import {CourseService} from "./course.service";
import {CourseEntity} from "./entity/course.entity";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";
import {ApiBearerAuth, ApiOkResponse} from "@nestjs/swagger";
import { ReviewCourse } from './entity/review-course.entity';

@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService) {
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiOkResponse({type: CourseEntity, isArray: true})
    @ApiBearerAuth()
    async findAllCourse() {
        const data = await this.courseService.findAllCourse()
        return data.map(item => {
            return new CourseEntity(item.id, item.name, item.description, item.thumbnail as string, item.video as string, item.document as string, item.userCount, item.memberCount, item.finished, item.rating5, item.rating4, item.rating3, item.rating2, item.rating1, item.price, item.level, item.user_id, item.created_at, item.updated_at ?? undefined, item.deleted_at as Date)
        })
    }

    @Get(":id/review")
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({type: ReviewCourse, isArray: true})
    async getAllReviewFromCourse(@Param("id") courseId: number) {
        return this.courseService.getReviewCourse(courseId);
    }
}
