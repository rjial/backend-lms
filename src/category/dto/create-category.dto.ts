import { ApiProperty } from "@nestjs/swagger"

export class CreateCategoryDTO {
    @ApiProperty()
    name: string
    @ApiProperty()
    description: string
    @ApiProperty()
    thumbnail: string
    created_at: Date
    updated_at?: Date
    deleted_at?: Date
}