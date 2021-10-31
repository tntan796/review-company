import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './styles.scss';
function CompanyInfo() {
    const detail = useSelector((state: RootState) => state.companyDetail.company);
    return (
        <div className="company-info-wrapper">
            <div className="logo">
                <img src={detail?.Logo} alt="logo" />
            </div>
            <div className="content">
                <div className="type">
                    <i className="pi pi-briefcase"></i> {detail?.Type}
                </div>
                <div className="address">
                    <i className="pi pi-map"></i> {detail?.Address}
                </div>
                <div className="size">
                    <i className="pi pi-users"></i> {detail?.Size}
                </div>
                <div className="description">
                    {detail?.Description}
                </div>
            </div>
        </div>
    );
}

export default CompanyInfo;