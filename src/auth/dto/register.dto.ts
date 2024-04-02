import {IsEmail, IsNotEmpty, IsNumber, IsString, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class RegisterDto {
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    @ApiProperty()
    @MinLength(8)
    password: string;

    @IsString()
    @ApiProperty()
    gender?: string;

    @IsString()
    @ApiProperty()
    nama: string;

    @IsString()
    @ApiProperty()
    phone?: string;

    @IsString()
    @ApiProperty()
    dot?: string;

    @IsString()
    @ApiProperty()
    address?: string;

    @IsString()
    @ApiProperty()
    countryCode?: string;

    @IsString()
    @ApiProperty()
    city?: string;

    @IsString()
    @ApiProperty()
    postalCode?: string;

    @IsNumber()
    @ApiProperty()
    balance?: number;

    @IsString()
    @ApiProperty()
    image?: string;

    constructor(email: string, password: string, gender: string, nama: string, phone: string, dot: string, address: string, countryCode: string, city: string, postalCode: string, balance: number, image: string) {

        this.email = email;
        this.password = password;
        this.gender = gender;
        this.nama = nama;
        this.phone = phone;
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