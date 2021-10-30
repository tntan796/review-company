import React, { useState } from 'react';
import './styles.scss';
import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';

function ReviewForm() {
    const [value2, setValue2] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const formik: any = useFormik({
        initialValues: {
            id: '',
            name: '',
            position: '',
            rating: '',
            review: '',
        },
        validate: (data) => {
            let errors: any = {};

            if (!data.review) {
                errors.review = 'review is required.';
            }
            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name: any) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name: any) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="p-field">
                <span className="p-float-label">
                    <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                    <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Name*</label>
                </span>
                {getFormErrorMessage('name')}
            </div>
            <div className="p-field">
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                    <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                </span>
                {getFormErrorMessage('email')}
            </div>
           
            <div className="p-field">
                <span className="p-float-label">
                    {/* <Dropdown id="country" name="country" value={formik.values.country} onChange={formik.handleChange} options={countries} optionLabel="name" /> */}
                    <label htmlFor="country">Country</label>
                </span>
            </div>
            <Button type="submit" label="Submit" className="p-mt-2" />
        </form>
    );
}

export default ReviewForm;