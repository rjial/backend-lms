export class Checkout {
    id: number;
    user_id: number;
    course_id: number;
    payment_method: string;
    verify: boolean;
    created_at: Date;
    deleted_at: Date | undefined;
    updated_at: Date | undefined;

    constructor(id: number, user_id: number, course_id: number, payment_method: string, verify: boolean) {
        this.user_id = user_id;
        this.course_id = course_id;
        this.payment_method = payment_method;
        this.verify = verify;
        this.created_at = new Date();
        this.deleted_at = undefined;
        this.updated_at = undefined;
        this.id = id;
    }
}
