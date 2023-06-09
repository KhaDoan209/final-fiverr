import { Injectable } from '@nestjs/common';
import { CongViecRepository } from 'src/application/repositories/business/congViecRepository.interface';
import { PrismaService } from 'src/infrastructure/config/prisma/prisma.service';
@Injectable()
export class CongViecService implements CongViecRepository {
   constructor(private readonly prisma: PrismaService,
   ) {
   }

   async getJobList(pageNumber: number): Promise<any> {
      return this.prisma.findAll('cong_viec');
   }
}
