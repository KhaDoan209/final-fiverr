import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { NguoiDung } from 'src/application/interface/nguoiDung.interface';
import { NguoiDungService } from 'src/persistence/nguoiDung/nguoiDung.service';

@Controller('user')
export class NguoiDungController {
   constructor(private readonly nguoiDungService: NguoiDungService) {
   }

   @Get('/list-user')
   async getUserList(@Res() response) {
      let data = await this.nguoiDungService.getListNguoiDung();
      response.send(data)
   }
}