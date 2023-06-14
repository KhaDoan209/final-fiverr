import { Controller, Get, Query } from '@nestjs/common';
import { CongViecService } from '../../persistence/congViec/congViec.service';
import { customResponse } from 'src/shared/response/customResponse';
import { HttpStatus } from '@nestjs/common/enums';
@Controller('job')
export class CongViecController {
  constructor(private readonly congViecService: CongViecService) { }

  @Get('/get-list-jobs')
  async getListJobs(@Query() query: any): Promise<any> {
    try {
      const { pageNumber } = query
      const data = await this.congViecService.getJobList(pageNumber)
      return customResponse(data, HttpStatus.OK, "Lấy danh sách công việc thành công")
    }
    catch (error) {
      return customResponse(error.message, HttpStatus.INTERNAL_SERVER_ERROR, "Lỗi Backend")
    }
  }
}
