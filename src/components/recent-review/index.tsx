import { Rating } from 'primereact/rating';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ReviewActionType } from '../../common/type';
import { Review } from '../../models/review.model';
import reviewService from '../../services/review.service';
import './styles.scss';

function RecentReview() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        reviewService.getRecentReview(10)
            .then(response => {
                setReviews(response.data.Data);
            })
    }

    const colorRating = (rating: number) => {
        let result = 'one';
        switch (rating) {
            case 1:
                result = 'one';
                break;
            case 2:
                result = 'two';
                break;
            case 3:
                result = 'three';
                break;
            case 4:
                result = 'four';
                break;
            default:
                result = 'five';
                break;
        }
        return result;
    }

    const viewDetail = (id: number) => {
        if (id) {
            history.push(`/company/${id}`);
        }
    }
    return (
        <div className="recent-review-wrapper">
            <div className="review-list">
                {
                    reviews && reviews.map((review: Review) => {
                        return (
                            <div className="review-item">
                                <span className="left">
                                    <div>
                                        <span className="name">
                                            {review?.UserName} đã &nbsp;
                                            <i className={review?.Favourite === ReviewActionType.like ? "pi pi-thumbs-up" : "pi pi-thumbs-down red"}></i> &nbsp;
                                            <span className="company-name" onClick = {() => viewDetail(review.CompanyId || 0)}>
                                                M_Service (MoMo)
                                            </span>
                                        </span>
                                    </div>
                                </span>
                                <div className="right">
                                    <div className={"rating p-mt-2 " + colorRating(review.Rating || 1)}>
                                        <Rating value={review?.Rating} cancel={false} disabled stars={5} />
                                    </div>
                                    <div className="time">{review?.Time}</div>
                                </div>
                                <div className="content p-mt-2">
                                    {review?.Comment}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default RecentReview;