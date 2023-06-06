import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res } from '@nestjs/common';
import { NguoiDung } from 'src/application/interface/business/nguoiDung.interface';
import { NguoiDungService } from 'src/persistence/nguoiDung/nguoiDung.service';
import { Role } from 'src/domain/enums/role.enum';
import { RoleGuard } from 'src/shared/middlewares/guards/role.guard';
import { Roles } from 'src/shared/decorators/roles.decorator';
@Controller('user')
export class NguoiDungController {
   constructor(private readonly nguoiDungService: NguoiDungService) {
   }

   @Get('/list-user')
   @UseGuards(RoleGuard)
   @Roles(Role.Admin)
   async getUserList(@Res() response: any) {
      let data = await this.nguoiDungService.getListNguoiDung();
      response.send(data)
   }
}