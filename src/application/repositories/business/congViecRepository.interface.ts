import { CreateCongViecDTO, UpdateCongViecDTO } from "src/application/dto/congViecDto"

export interface CongViecRepository {
   getJobList(pageNumber: number): Promise<any>
   getJobDetail(id: number): Promise<any>
   createNewJob(id: number, data: CreateCongViecDTO): Promise<any>
   updateJobInfor(id: number, data: UpdateCongViecDTO): Promise<any>
   deleteJob(id: number): Promise<any>
}