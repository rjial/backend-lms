export class CreateEventDto {
    constructor(
        id: number,
        name: string,
        number: string,
        description: string,
        created_at: Date,
        deleted_at?: Date,
        updated_at?: Date,
    ){}
}
