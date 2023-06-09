
export interface CongViecRepository {
   getJobList(pageNumber: number): Promise<any>
}