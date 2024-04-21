export class CreateCheckoutDto {
    user_id: number;
    course_id: number;
    payment_method: string;
    verify: boolean;

    constructor(user_id: number, course_id: number, payment_method: string, verify: boolean) {
        this.user_id = user_id;
        this.course_id = course_id;
        this.payment_method = payment_method;
        this.verify = verify;
    }
}
