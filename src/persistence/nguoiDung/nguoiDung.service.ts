import { Injectable } from '@nestjs/common';
import { NguoiDung } from 'src/application/interface/nguoiDung.interface';
import { NguoiDungRepository } from 'src/application/repositories/nguoiDungRepository.interface';
import { PrismaService } from 'src/infrastructure/config/prisma/prisma.service';


export class NguoiDungService implements NguoiDungRepository {
   constructor(private readonly prisma: PrismaService) {

   }
   getListNguoiDung(): any {
      return "get list nguoi dung service"
   }
   getChiTietNguoiDung(id: number): Promise<NguoiDung> {
      return
   }
}