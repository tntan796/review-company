import React, { useEffect, useRef, useState } from 'react';
import companyService from '../../services/company.service';
import CompanyItem from '../company-item';
import './styles.scss';
import { Toast } from 'primereact/toast';
import { Company, FilterModel } from '../../models/index.model';
import { Paginator } from 'primereact/paginator';

function CompanyList() {
    const toast: any = useRef(null);
    const [companies, setCompanies] = useState([]);
    const [offset, setOffset] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalRecord, setTotalRecord] = useState(0);

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        fetchData();
    }, [offset, pageSize])

    const fetchData = () => {
        let filterModel = new FilterModel();
        filterModel.pageSize = pageSize;
        filterModel.offSet = offset;
        companyService.getCompanies(filterModel)
            .then(response => {
                if (response.data && response.data.StatusCode === 200) {
                    setCompanies(response.data.Data.Data);
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
        <div className="company-list">
            {
                companies && companies.map((company: Company) =>
                    <CompanyItem
                        key={company.Id}
                        company={company}
                    />
                )
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

export default CompanyList;