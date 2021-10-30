import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import ReviewItem from '../review-item';
import { useParams } from 'react-router-dom';
import reviewService from '../../services/review.service';
import { FilterReviewModel } from '../../models/filter.model';
import { Paginator } from 'primereact/paginator';
import { Toast } from 'primereact/toast';
import { Review } from '../../models/review.model';
function ReviewList() {
    let { id } = useParams<any>();
    const toast: any = useRef(null);
    const [reviews, setReviews] = useState([]);
    const [offset, setOffset] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalRecord, setTotalRecord] = useState(0);
    
    useEffect(() => {
        if (id !== -1) {
            fetchData();
        }
    }, [id, pageSize, offset]);

    const fetchData = () => {
        let filterModel = new FilterReviewModel();
        filterModel.companyId = +id;
        filterModel.pageSize = pageSize;
        filterModel.offSet = offset;
        reviewService.getReviews(filterModel)
            .then(response => {
                console.log('Detail:', response);
                if (response.data && response.data.StatusCode === 200) {
                    setReviews(response.data.Data.Data);
                    setTotalRecord(response.data.Data.RecordsTotal);
                }
            }).catch(error => {
                toast.current.show({ severity: 'error', summary: 'Error', detail: error });
            });
    }

    const onBasicPageChange = (event: any) => {
        setOffset(event.first);
        setPageSize(event.rows);
    }

    return (
        <div className="review-list">
            {
                reviews && reviews.map((review: Review) => (
                    <ReviewItem
                        key = {review.Id}
                        review = {review}
                    />
                ))
            }
            <Paginator
                first={offset}
                rows={pageSize}
                totalRecords={totalRecord}
                rowsPerPageOptions={[10, 25, 50, 100]}
                onPageChange={onBasicPageChange}></Paginator>
            <Toast ref={toast} />
        </div>
    );
}

export default ReviewList;