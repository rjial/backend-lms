import { Category } from "@prisma/client";
import { CourseEntity } from "src/course/entity/course.entity";

export class CourseCategory {
    constructor(
        id: number,
        category: Category,
        course: CourseEntity,
        created_at: Date,
        updated_at?: Date,
        deleted_at?: Date
    ){}
}