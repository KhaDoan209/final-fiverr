import { NguoiDung } from "../../interface/business/nguoiDung.interface";

export interface NguoiDungRepository {
   getListNguoiDung(): Promise<NguoiDung>;
   getChiTietNguoiDung(id: number): Promise<NguoiDung>;
}