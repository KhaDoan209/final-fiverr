import { Controller, Get } from '@nestjs/common';
import { CongViecService } from '../../persistence/congViec/congViec.service';
import { Role } from 'src/domain/enums/role.enum';
import { UseGuards } from '@nestjs/common';
@Controller('job')
export class CongViecController {
  constructor(private readonly congViecService: CongViecService) { }

  @Get('/get-list-jobs')
  async getListJobs() {
    return "List job"
  }
}
