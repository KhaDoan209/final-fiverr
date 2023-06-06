import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class AuthLoginDto {
   @IsNotEmpty()
   @IsString()
   readonly email: string;

   @IsNotEmpty()
   @IsString()
   readonly password: string;
}

export class AuthRegisterDto {
   @IsNotEmpty()
   @IsString()
   readonly email: string

   @IsNotEmpty()
   @IsString()
   readonly password: string

   @IsString()
   readonly ten: string

   @IsNumber()
   readonly gioi_tinh: number

   readonly role: string | any


}