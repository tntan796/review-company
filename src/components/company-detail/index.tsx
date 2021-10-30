import React, { useState } from 'react';
import { Rating } from 'primereact/rating';
import './styles.scss';
import { Button } from 'primereact/button';
import ReviewList from '../review-list';
import CompanyInfo from '../company-info';
import { Divider } from 'primereact/divider';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Dialog } from 'primereact/dialog';
import ReviewForm from '../review-form';
function CompanyDetail() {
    const items = [
        { label: 'Trang chủ', url: '/' },
        { label: 'Chi tiết' }
    ];
    const [displayBasic, setDisplayBasic] = useState(false);
    const home = { icon: 'pi pi-home', url: '/' }
    return (
        <div className="detail-wrapper">
            <BreadCrumb model={items} home={home} />
            <div className="p-grid">
                <div className="p-col-12 p-md-9">
                    <CompanyInfo />
                    <Divider />
                    <ReviewList />
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
                        <Button label="Viết review" onClick={() => setDisplayBasic(true)}/>
                    </div>
                </div>
            </div>
            <Dialog header="Header" visible={displayBasic} modal style={{ width: '50vw' }} onHide={() => setDisplayBasic(false)}
                draggable={false} resizable={false}>
                <ReviewForm/>
            </Dialog>
        </div>
    );
}

export default CompanyDetail;