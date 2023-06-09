import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoaiCongViecService } from '../../persistence/loai-cong-viec/loaiCongViec.service';
import { Role } from 'src/domain/enums/role.enum';
import { Roles } from 'src/shared/decorators/roles.decorator';


@Controller('job-type')
export class LoaiCongViecController {
  constructor(private readonly loaiCongViecService: LoaiCongViecService) { }

  @Get('/list-job-types')
  async getListJobTitle() {
    let data = await this.loaiCongViecService.getListJobTitle()
    return data
  }


  @Get('/job-type-detail/:id')
  getJobTypeDetail() {
    return "chi tiết công việc"
  }

}
