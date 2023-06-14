import { Injectable } from '@nestjs/common';
import { CreateCongViecDTO, UpdateCongViecDTO } from 'src/application/dto/congViecDto';
import { CongViecRepository } from 'src/application/repositories/business/congViecRepository.interface';
import { PrismaService } from 'src/infrastructure/config/prisma/prisma.service';
@Injectable()
export class CongViecService implements CongViecRepository {
   constructor(private readonly prisma: PrismaService,
   ) {
   }

   async getJobList(pageNumber: number = 1): Promise<any> {
      let pageSize = 2
      const index = (pageNumber - 1) * pageSize
      let data = await this.prisma.usePrisma().cong_viec.findMany({
         skip: index,
         take: pageSize
      });
      return {
         data: data,
         page: pageNumber
      }
   }
   getJobDetail(id: number): Promise<any> {
      return
   }
   createNewJob(id: number, data: CreateCongViecDTO): Promise<any> {
      return
   }
   updateJobInfor(id: number, data: UpdateCongViecDTO): Promise<any> {
      return
   }
   deleteJob(id: number): Promise<any> {
      return
   }
}
