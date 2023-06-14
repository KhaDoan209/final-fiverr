import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateCongViecDTO {

   @IsString()
   @IsNotEmpty()
   ten_cong_viec: string;

   @IsNumber()
   danh_gia: number;

   @IsNumber()
   @IsNotEmpty()
   gia_tien: number;

   @IsString()
   mo_ta: string;

   @IsString()
   mo_ta_ngan: string;

   @IsNumber()
   sao_cong_viec: number;

   @IsNumber()
   id_loai_cong_viec: number;

   @IsNumber()
   id_nguoi_dung: number;
}

export class UpdateCongViecDTO {
   @IsString()
   ten_cong_viec: string;

   @IsNumber()
   danh_gia: number;

   @IsNumber()
   gia_tien: number;

   @IsString()
   mo_ta: string;

   @IsString()
   mo_ta_ngan: string;

   @IsNumber()
   sao_cong_viec: number;

   @IsNumber()
   id_loai_cong_viec: number;

   @IsNumber()
   id_nguoi_dung: number;
}