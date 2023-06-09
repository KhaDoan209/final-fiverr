import { Module } from '@nestjs/common';
import { NguoiDungModule } from './nguoiDung/nguoiDung.module';
import { CongViecModule } from './congViec/congViec.module';
import { LoaiCongViecModule } from './loai-cong-viec/loaiCongViec.module';
@Module({
   imports: [NguoiDungModule, CongViecModule, LoaiCongViecModule],
   exports: [NguoiDungModule, CongViecModule, LoaiCongViecModule]
})
export class PersistenceModule { }