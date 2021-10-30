import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Company } from '../../models/company.model';
import companyService from '../../services/company.service';
import './styles.scss';
function CompanyInfo() {
    let { id } = useParams<any>();
    const [detail, setDetail] = useState<Company>(new Company());
    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id])

    const fetchData = () => {
        companyService.getCompanyById(id)
        .then(response => {
            if (response.data.StatusCode == 200) {
                console.log(response);
                setDetail(response.data.Data);
            }
        })
    }

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