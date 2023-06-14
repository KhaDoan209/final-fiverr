import { IsNotEmpty, IsString, IsNumber } from "class-validator";
export class CreateChiTietLoaiCongViecDTO {
   @IsNotEmpty()
   @IsString()
   ten_chi_tiet: string;

   @IsNumber()
   @IsNotEmpty()
   id_loai: number
}

export class UpdateChiTietLoaiCongViecDTO {
   @IsNotEmpty()
   @IsString()
   ten_chi_tiet: string;

   @IsNumber()
   @IsNotEmpty()
   id_loai: number
}