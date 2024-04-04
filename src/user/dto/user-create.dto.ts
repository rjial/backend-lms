import {IsBoolean, IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    gender?: string;

    @IsString()
    namee: string;

    @IsString()
    phone?: string;

    @IsDateString()
    dot?: string;

    @IsString()
    address?: string;

    @IsString()
    countryCode?: string;

    @IsString()
    city?: string;

    @IsString()
    postalCode?: string;

    @IsNumber()
    balance?: number;

    @IsString()
    image?: string;

    constructor(email: string, password: string, gender: string, username: string, namee: string, phone: string, dot: string, address: string, countryCode: string, city: string, postalCode: string, balance: number, image: string) {
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.namee = namee;
        this.phone = phone;
        this.username = username;
        this.dot = dot;
        this.address = address;
        this.countryCode = countryCode;
        this.city = city;
        this.postalCode = postalCode;
        this.balance = balance;
        this.image = image;
        console.log(this)
    }
}