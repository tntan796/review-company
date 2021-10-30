import React from 'react';
import './styles.scss';
function CompanyInfo() {
    return (
        <div className="company-info-wrapper">
            <div className="logo">
                <img src="https://infocongty.com/Images/Companies/aperia-solutions-vietnam-co-ltd-logo.png" alt="logo" />
            </div>
            <div className="content">
                <div className="type">
                    <i className="pi pi-briefcase"></i> Outsource
                </div>
                <div className="address">
                    <i className="pi pi-map"></i> 17 Duy Tân, Cầu Giấy, Hà Nội
                </div>
                <div className="size">
                    <i className="pi pi-users"></i> 1000
                </div>
                <div className="description">
                    FPT Software thành lập năm 1999, là công ty thành viên của FPT, Tập đoàn Công nghệ hàng đầu của Việt Nam. Sau 20 năm thành lập FPT Software hiện đang là công ty phần mềm lớn nhất của Việt Nam và đứng trong Top 100 Nhà cung cấp dịch vụ Outsourcing toàn cầu do International Association of Outsourcing Professionals (IAOP) đánh giá. Nhiều năm liền, FPT Software được bình chọn là Nhà Tuyển dụng được yêu thích nhất và nằm trong TOP các công ty có môi trường làm việc tốt nhất Việt Nam.
                </div>
            </div>
           
        </div>
    );
}

export default CompanyInfo;