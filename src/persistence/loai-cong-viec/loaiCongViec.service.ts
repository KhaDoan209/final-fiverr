import { Injectable } from '@nestjs/common';
import { CreateLoaiCongViecDTO, UpdateLoaiCongViecDTO } from 'src/application/dto/loaiCongViecDto';
import { LoaiCongViecRepository } from 'src/application/repositories/business/loaiCongViecRepository.interface'
import { PrismaService } from 'src/infrastructure/config/prisma/prisma.service';
@Injectable()
export class LoaiCongViecService implements LoaiCongViecRepository {
  constructor(private readonly prisma: PrismaService) {

  }
  async getListJobTitle(pageNumber: number = 1): Promise<any> {
    let data = await this.prisma.findAll('loai_cong_viec')
    return data
  }
  createNewJobTitle(data: CreateLoaiCongViecDTO): Promise<any> {
    return
  }
  updateJobTitle(data: UpdateLoaiCongViecDTO): Promise<any> {
    return
  }
  deleteJobTitle(id: number): Promise<any> {
    return
  }
}
