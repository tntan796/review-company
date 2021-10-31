import React from 'react';
import './styles.scss';
import { Rating } from 'primereact/rating';
import { Company } from '../../models/index.model';
import { useHistory } from "react-router-dom";

type PropTypes = {
    company: Company
}

function CompanyItem(props: PropTypes) {
    const {company} = props;
    const history = useHistory();

    const viewDetail = (id: number) => {
        if (id) {
            history.push(`/company/${id}`);
        }
    }

    return (
        <div className="company-item" onClick = {() => viewDetail(company?.Id)}>
            <div className="logo">
                <img src={company?.Logo} alt="logo" />
            </div>
            <div className="content">
                <div className="title">
                    <div className="name">
                        {company?.Name}
                    </div>
                    <div className="rating">
                        <Rating value={3} cancel={false} disabled stars={5} />
                    </div>
                    <div className="total-coment">
                        ({company?.TotalComment})
                    </div>

                </div>
                <div className="sub-title">
                    <div className="type">
                        <i className="pi pi-briefcase"></i> {company?.Type}
                    </div>
                    <div className="size">
                        <i className="pi pi-users"></i> {company?.Size}
                    </div>
                </div>
                <div className="address">
                    <i className="pi pi-map"></i> {company?.Address}
                </div>
            </div>
        </div>
    );
}

export default CompanyItem;