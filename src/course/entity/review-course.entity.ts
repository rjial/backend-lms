import { ApiProperty } from "@nestjs/swagger"

export class ReviewCourse {
    @ApiProperty()
    id: number
    @ApiProperty()
    course_id: number
    @ApiProperty()
    user_id: number
    @ApiProperty()
    description: string
    @ApiProperty()
    rating: number
    constructor(
        id: number,
        course_id: number,
        user_id: number,
        description: string,
        rating: number
    ) {
        this.id = id
        this.course_id = course_id
        this.user_id = user_id
        this.description = description
        this.rating = rating
    }
}