import React from 'react';
import { useParams } from "react-router-dom";
import { Rating } from 'primereact/rating';
import './styles.scss';
import { Button } from 'primereact/button';
import ReviewList from '../review-list';
function CompanyDetail() {
    let params: any = useParams();
    return (
        <div className="detail-wrapper">
            <div className="p-grid">
                <div className="p-col-12 p-md-9">
                    <ReviewList/>
                </div>
                <div className="p-col-0 p-md-3">
                    <div className="rating-summary">
                        <div className="rating-item">
                            <div className="rating">
                                <Rating value={3} cancel={false} disabled stars={5} />
                            </div>
                            <div className="percent">
                                16%
                            </div>
                        </div>
                        <div className="rating-item">
                            <div className="rating">
                                <Rating value={3} cancel={false} disabled stars={5} />
                            </div>
                            <div className="percent">
                                16%
                            </div>
                        </div>
                        <div className="rating-item">
                            <div className="rating">
                                <Rating value={3} cancel={false} disabled stars={5} />
                            </div>
                            <div className="percent">
                                16%
                            </div>
                        </div>
                        <div className="rating-item">
                            <div className="rating">
                                <Rating value={3} cancel={false} disabled stars={5} />
                            </div>
                            <div className="percent">
                                16%
                            </div>
                        </div>
                        <div className="rating-item">
                            <div className="rating">
                                <Rating value={3} cancel={false} disabled stars={5} />
                            </div>
                            <div className="percent">
                                16%
                            </div>
                        </div>
                    </div>
                    <div className="actions p-mt-2">
                        <Button label="Viết review" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyDetail;