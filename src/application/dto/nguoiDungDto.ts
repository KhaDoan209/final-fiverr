import { IsString, IsNumber, IsArray, IsEmail, IsNotEmpty } from "class-validator";
import { Exclude } from "class-transformer";

export class NguoiDungDTO {

   id: number;
   ten: string;
   email: string

   password: string;

   @Exclude()
   dien_thoai: string;

   @Exclude()
   ngay_sinh: string;

   @Exclude()
   gioi_tinh: string;

   role: string;

   ky_nang: Array<string>;

   chung_chi: Array<string>;


}

export class CreateNguoiDungAdminDTO {
   @IsNotEmpty()
   @IsString()
   ten: string;

   @IsNotEmpty()
   @IsString()
   email: string

   @IsNotEmpty()
   @IsString()
   password: string;


   @IsString()
   @IsNotEmpty()
   role: string
}

export class UpdateNguoiDungDTO {

   @IsString()
   ten: string;

   @IsString()
   dien_thoai: string;

   @IsString()
   ngay_sinh: string;

   @IsString()
   gioi_tinh: string;

   @IsString()
   ky_nang: Array<string>;

   @IsString()
   chung_chi: Array<string>;
}




