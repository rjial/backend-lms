export class Lesson {
    courseId: number
    name: string
    description: string
    video: string
    document: string
    thumbnail: string
    created_at: string
    updated_at?: string
    deleted_at?: string

    constructor(
        courseId: number,
        name: string,
        description: string,
        video: string,
        document: string,
        thumbnail: string,
        created_at: string,
        updated_at?: string | undefined,
        deleted_at?: string | undefined
    ) {
        this.courseId = courseId
        this.name = name
        this.description = description
        this.video = video
        this.document = document
        this.thumbnail = thumbnail
        this.created_at = created_at
        this.updated_at = updated_at || ""
        this.deleted_at = deleted_at || ""
    }
}
