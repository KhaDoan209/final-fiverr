import { Module } from '@nestjs/common';
import { NguoiDungModule } from './nguoiDung/nguoiDung.module';
@Module({
   imports: [NguoiDungModule],
   exports: [NguoiDungModule]
})
export class PersistenceModule { }