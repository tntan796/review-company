import React from 'react';
import './styles.scss';
import { Rating } from 'primereact/rating';

function CompanyItem() {
    return (
        <div className="company-item">
            <div className="logo">
                <img src="https://infocongty.com/Images/Companies/fpt-software-logo.png" alt="logo" />
            </div>
            <div className="content">
                <div className="title">
                    <div className="name">
                        Fpt software
                    </div>
                    <div className="rating">
                        <Rating value={3} cancel={false} disabled stars={5} />
                    </div>
                    <div className="total-coment">
                        (20)
                    </div>

                </div>
                <div className="sub-title">
                    <div className="type">
                        <i className="pi pi-briefcase"></i> Outsource
                    </div>
                    <div className="size">
                        <i className="pi pi-users"></i> 1000
                    </div>
                </div>
                <div className="address">
                    <i className="pi pi-map"></i>17 Duy Tân, Cầu Giấy, Hà Nội
                </div>
            </div>
        </div>
    );
}

export default CompanyItem;