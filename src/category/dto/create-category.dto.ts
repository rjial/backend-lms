export class CreateCategoryDTO {
    constructor(
        id: number,
        name: string,
        description: string,
        thumbnail: string,
        created_at: Date,
        updated_at?: Date,
        deleted_at?: Date
    ) {}
}