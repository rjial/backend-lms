import { ApiProperty } from "@nestjs/swagger";
import { Category, Course } from "@prisma/client";
import { CourseEntity } from "src/course/entity/course.entity";

export class CourseCategory {
    @ApiProperty()
    id: number
    @ApiProperty()
    category: Category
    @ApiProperty()
    course: Course
    created_at: Date
    updated_at?: Date
    deleted_at?: Date
}