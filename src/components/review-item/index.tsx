import React from 'react';
import { Rating } from 'primereact/rating';
import './styles.scss';
import { Button } from 'primereact/button';
import { Review } from '../../models/review.model';
import { useDispatch } from 'react-redux';
import { ReviewActionType } from '../../common/type';
import { setCommentId, setReviewActionType, showDialog } from '../../redux/features/review-form/reviewFormSlice';

type PropType = {
    review: Review
}

function ReviewItem(props: PropType) {
    const { review } = props;
    const dispatch = useDispatch();

    const handleReply = (type: ReviewActionType, commentId: string) => {
        dispatch(setReviewActionType(type));
        dispatch(setReviewActionType(type));
        dispatch(setCommentId(commentId));
        dispatch(showDialog());
    }

    return (
        <div className="review-item-wrapper">
            <div className="review-item">
                <div className="header">
                    <div className="left">
                        <div className="icon">
                            <i className="pi pi-user"></i>
                        </div>
                        <div className="name">{review?.UserName}</div>
                        <div className="rating p-ml-2">
                            <Rating value={3} cancel={false} disabled stars={5} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="time">{review?.Time}</div>
                    </div>
                </div>
                <div className="content p-mt-2">
                    {review?.Comment}
                </div>
                <div className="action-wrapper p-mt-2">
                    <div className="action">
                        <Button label="Comment" className="p-button-success p-button-text" icon="pi pi-comments" onClick = {() => handleReply(ReviewActionType.comment, review.Id)}/>
                        <Button label="Thích" className="p-button-text" icon="pi pi-thumbs-up" onClick = {() => handleReply(ReviewActionType.like, review.Id)}/>
                        <Button label="Ghét" className="p-button-danger p-button-text" icon="pi pi-thumbs-down" onClick = {() => handleReply(ReviewActionType.dislike, review.Id)}/>
                    </div>
                </div>
            </div>
            {
                review.Replies ? (
                    <div className="replies-wrapper">
                        <div className="reply-list">
                            {review.Replies.map((reply: Review) => (
                                <div className="review-item" key = {reply?.Id}>
                                    <div className="header">
                                        <div className="left">
                                            <div className="icon">
                                                <i className="pi pi-user"></i>
                                            </div>
                                            <div className="name">{reply?.UserName}
                                                <span className="p-ml-1">
                                                    <i className="pi pi-thumbs-up"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="time">{reply?.Time}</div>
                                        </div>
                                    </div>
                                    <div className="content p-mt-2">
                                        {reply?.Comment}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
}

export default ReviewItem;