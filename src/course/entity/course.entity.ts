export class CourseEntity {
    constructor(id: number, name: string, description: string, thumbnail: string, video: string, document: string, userCount: number, memberCount: number, finished: string, rating5: number, rating4: number, rating3: number, rating2: number, rating1: number, price: string, level: string, user_id: number, created_at: string, updated_at: string, deleted_at: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbnail = thumbnail;
        this.video = video;
        this.document = document;
        this.userCount = userCount;
        this.memberCount = memberCount;
        this.finished = finished;
        this.rating5 = rating5;
        this.rating4 = rating4;
        this.rating3 = rating3;
        this.rating2 = rating2;
        this.rating1 = rating1;
        this.price = price;
        this.level = level;
        this.user_id = user_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
    id: number
    name: string
    description: string
    thumbnail: string
    video: string
    document: string
    userCount: number
    memberCount: number
    finished: string
    rating5: number
    rating4: number
    rating3: number
    rating2: number
    rating1: number
    price: string
    level: string
    user_id: number
    created_at: string
    updated_at: string
    deleted_at: string

}
