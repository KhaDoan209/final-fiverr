import { CreateLoaiCongViecDTO, UpdateLoaiCongViecDTO } from "src/application/dto/loaiCongViecDto";
export interface LoaiCongViecRepository {
   getListJobTitle(pageNumber: number): Promise<any>;
   createNewJobTitle(data: CreateLoaiCongViecDTO): Promise<any>;
   updateJobTitle(data: UpdateLoaiCongViecDTO): Promise<any>
   deleteJobTitle(id: number): Promise<any>
}