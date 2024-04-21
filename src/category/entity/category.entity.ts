import { ApiProperty, ApiResponseProperty } from "@nestjs/swagger"

export class Category {
    @ApiProperty()
    id: number
    @ApiProperty()
    name: string
    @ApiProperty()
    description: string
    @ApiProperty()
    thumbnail: string
    @ApiProperty()
    created_at: Date
    @ApiProperty()
    updated_at?: Date
    @ApiProperty()
    deleted_at?: Date
}