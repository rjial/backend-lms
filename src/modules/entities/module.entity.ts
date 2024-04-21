export class Module {
    constructor(
        public id: number,
        public course_id: number,
        public name: string,
        public description: string,
        public thumbnail: string,
        public video: string,
        public document: string,
        public created_at: Date,
        public deleted_at?: Date,
        public updated_at?: Date,
    ) {

    }
}
