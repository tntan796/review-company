import axiosInstance from "./axios.service";
import CONSTANTS from "../common/constants";
import { FilterModel } from "../models/index.model";
class CompanyService {
  getCompanies(query: FilterModel = new FilterModel()) {
    return axiosInstance.get(`${CONSTANTS.BASE_API}/Company?filter=${query.filter}&offSet=${query.offSet}&pageSize=${query.pageSize}`)
  }

  getCompanyById(id: number) {
    return axiosInstance.get(`${CONSTANTS.BASE_API}/Company/${id}`)
  }
}

export default new CompanyService();