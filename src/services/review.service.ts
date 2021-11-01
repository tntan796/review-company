import axiosInstance from "./axios.service";
import CONSTANTS from "../common/constants";
import { FilterReviewModel } from "../models/index.model";
import { Review } from "../models/review.model";
class ReviewService {
  getReviews(query: FilterReviewModel = new FilterReviewModel()) {
    return axiosInstance.get(`${CONSTANTS.BASE_API}/Review?companyId=${query.companyId}&offSet=${query.offSet}&pageSize=${query.pageSize}`)
  }

  setReview(review: Review) {
    return axiosInstance.post(`${CONSTANTS.BASE_API}/Review`, review);
  }
}

export default new ReviewService();