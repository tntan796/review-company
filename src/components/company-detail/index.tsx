import React, { useEffect, useState } from 'react';
import { Rating } from 'primereact/rating';
import './styles.scss';
import { Button } from 'primereact/button';
import ReviewList from '../review-list';
import CompanyInfo from '../company-info';
import { Divider } from 'primereact/divider';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Dialog } from 'primereact/dialog';
import ReviewForm from '../review-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { showDialog, hideDialog} from '../../redux/features/review-form/reviewFormSlice';
import { useParams } from 'react-router';
import { Company } from '../../models/company.model';
import companyService from '../../services/company.service';
import { setDetail } from '../../redux/features/company-detail/companyDetailSlice';

function CompanyDetail() {
    const isShowDialog = useSelector((state: RootState) => state.reviewForm.showDialog);
    const dispatch = useDispatch();
    const items = [
        { label: 'Trang chủ', url: '/' },
        { label: 'Chi tiết' }
    ];
    const home = { icon: 'pi pi-home', url: '/' }
    let { id } = useParams<any>();

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id])

    const fetchData = () => {
        companyService.getCompanyById(id)
        .then(response => {
            if (response.data.StatusCode == 200) {
                dispatch(setDetail(response.data.Data));
            }
        })
    }

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
                            <div className="percent"> 16% </div>
                        </div>
                        <div className="rating-item">
                            <div className="rating">
                                <Rating value={3} cancel={false} disabled stars={5} />
                            </div>
                            <div className="percent"> 16% </div>
                        </div>
                        <div className="rating-item">
                            <div className="rating">
                                <Rating value={3} cancel={false} disabled stars={5} />
                            </div>
                            <div className="percent"> 16%  </div>
                        </div>
                        <div className="rating-item">
                            <div className="rating">
                                <Rating value={3} cancel={false} disabled stars={5} />
                            </div>
                            <div className="percent"> 16% </div>
                        </div>
                        <div className="rating-item">
                            <div className="rating">
                                <Rating value={3} cancel={false} disabled stars={5} />
                            </div>
                            <div className="percent"> 16% </div>
                        </div>
                    </div>
                    <div className="actions p-mt-2">
                        <Button label="Viết review" onClick={() => dispatch(showDialog())} />
                    </div>
                </div>
            </div>
            <Dialog header="Review công ty" visible={isShowDialog} modal style={{ width: '50vw' }} onHide={() => dispatch(hideDialog())}
                draggable={false} resizable={false}>
                <ReviewForm />
            </Dialog>
        </div>
    );
}

export default CompanyDetail;