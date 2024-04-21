import { ApiProperty } from "@nestjs/swagger"

export class CourseEntity {

    @ApiProperty()
    id: number
    @ApiProperty()
    name: string
    @ApiProperty()
    description: string
    @ApiProperty()
    thumbnail: string
    @ApiProperty()
    video: string
    @ApiProperty()
    document: string
    @ApiProperty()
    userCount: number
    @ApiProperty()
    memberCount: number
    @ApiProperty()
    finished: string
    @ApiProperty()
    rating5: number
    @ApiProperty()
    rating4: number
    @ApiProperty()
    rating3: number
    @ApiProperty()
    rating2: number
    @ApiProperty()
    rating1: number
    @ApiProperty()
    price: string
    @ApiProperty()
    level: string
    @ApiProperty()
    user_id: number
    @ApiProperty()
    created_at: Date
    @ApiProperty()
    updated_at?: Date
    @ApiProperty()
    deleted_at?: Date

}
