import { NguoiDung } from "../interface/nguoiDung.interface";

export interface NguoiDungRepository {
   getListNguoiDung(): Promise<NguoiDung>;
   getChiTietNguoiDung(id: number): Promise<NguoiDung>;
}