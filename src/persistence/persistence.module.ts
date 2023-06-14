import { Module } from '@nestjs/common';
import { NguoiDungModule } from './nguoiDung/nguoiDung.module';
import { CongViecModule } from './congViec/congViec.module';
import { LoaiCongViecModule } from './loaiCongViec/loaiCongViec.module';
import { ChiTietLoaiCongViecModule } from './chiTietLoaiCongViec/chiTietLoaiCongViec.module';
@Module({
   imports: [NguoiDungModule, CongViecModule, LoaiCongViecModule, ChiTietLoaiCongViecModule],
   exports: [NguoiDungModule, CongViecModule, LoaiCongViecModule, ChiTietLoaiCongViecModule]
})
export class PersistenceModule { }