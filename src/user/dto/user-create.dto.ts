import {IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsString()
    gender?: string;

    @IsString()
    name: string;

    @IsString()
    phone?: string;

    @IsString()
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

    constructor(email: string, password: string, gender: string, name: string, phone: string, dot: string, address: string, countryCode: string, city: string, postalCode: string, balance: number, image: string) {
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.name = name;
        this.phone = phone;
        this.dot = dot;
        this.address = address;
        this.countryCode = countryCode;
        this.city = city;
        this.postalCode = postalCode;
        this.balance = balance;
        this.image = image;
    }
}