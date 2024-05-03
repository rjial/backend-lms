import {Controller, Get, Param, UseGuards} from '@nestjs/common';
import {CourseService} from "./course.service";
import {CourseEntity} from "./entity/course.entity";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";
import {ApiBearerAuth, ApiOkResponse} from "@nestjs/swagger";
import { ReviewCourse } from './entity/review-course.entity';
import { Lesson } from 'src/lesson/entities/lesson.entity';

@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService) {
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiOkResponse({type: CourseEntity, isArray: true})
    @ApiBearerAuth()
    async findAllCourse() {
        return this.courseService.findAllCourse()
    }

    @Get(":id")
    @UseGuards(JwtAuthGuard)
    @ApiOkResponse({type: CourseEntity, isArray: false})
    @ApiBearerAuth()
    async findCourse(@Param("id") courseId: number) {
        return this.courseService.findCourse(courseId)
    }

    @Get(":id/review")
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({type: ReviewCourse, isArray: true})
    async getAllReviewFromCourse(@Param("id") courseId: number) {
        return this.courseService.getReviewCourse(courseId);
    }

    @Get(":id/lesson")
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({type: Lesson, isArray: true})
    async getLessonsFromCourse(@Param("id") courseId: number) {
        return this.courseService.getLessonsFromCourse(courseId);
    }
}
