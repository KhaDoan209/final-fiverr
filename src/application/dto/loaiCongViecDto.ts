import { IsNotEmpty, IsString } from "class-validator";
export class CreateLoaiCongViecDTO {
   @IsNotEmpty()
   @IsString()
   ten_loai: string;
}
export class UpdateLoaiCongViecDTO {
   @IsNotEmpty()
   @IsString()
   ten_loai: string;
}