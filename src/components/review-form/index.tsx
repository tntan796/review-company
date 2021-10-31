import React, { useState } from 'react';
import './styles.scss';
import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { useDispatch } from 'react-redux';
import { hideDialog, setFormData, showDialog } from '../../redux/features/review-form/reviewFormSlice';
type PropsType = {
    // closeModel: () => void
}
function ReviewForm(props: PropsType) {
    const dispatch = useDispatch();
    const [ratings, setRatings] = useState(
    [
        {"name": "1 điểm - Max chán, né gấp kẻo hối không kịp", "code": 1},
        {"name": "2 điểm - Hơi chán, để xem sao", "code": 2},
        {"name": "3 điểm - Công ty bình thường", "code": 3},
        {"name": "4 điểm - Công ty tốt, nên làm lâu dài", "code": 4},
        {"name": "5 điểm - Công ty đỉnh, đuổi không đi", "code": 5},
    ])
    const formik: any = useFormik({
        initialValues: {
            id: '',
            name: '',
            position: '',
            rating:  {"name": "3 điểm - Công ty bình thường", "code": 3},
            review: '',
        },
        validate: (data) => {
            let errors: any = {};
            if (!data.review) {
                errors.review = 'Vui lòng nhập thông tin đánh giá!';
            }
            return errors;
        },
        onSubmit: (data) => {
            dispatch(hideDialog());
            dispatch(setFormData({...data, rating: data.rating.code}));
            // formik.resetForm();
        }
    });

    const isFormFieldValid = (name: any) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name: any) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="card p-pt-4">
                <div className="p-fluid p-grid">
                    <div className="p-field p-col-12">
                        <span className="p-float-label">
                            <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                            <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Tên</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12">
                        <span className="p-float-label">
                            <InputText id="position" name="position" value={formik.values.position} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('position') })} />
                            <label htmlFor="position" className={classNames({ 'p-error': isFormFieldValid('position') })}>Chức vụ</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12">
                        <span className="p-float-label">
                            <InputTextarea rows={5}  id="review" cols={30} value={formik.values.review} autoFocus onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('review') })} />
                            <label htmlFor="review" className={classNames({ 'p-error': isFormFieldValid('review') })}>Review công ty <span className="text-danger"> *</span></label>
                        </span>
                        {getFormErrorMessage('review')}
                    </div>
                    <div className="p-field p-col-12">
                        <span className="p-float-label">
                            <Dropdown id="rating" name="rating" value={formik.values.rating} onChange={formik.handleChange} options={ratings} optionLabel="name" />
                            <label htmlFor="rating">Đánh giá</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12">
                      <small>
                      Người đăng chịu trách nhiệm về tính xác thực của nội dung và chấp nhận điều khoản Lời khuyên Hãy review chân thật và văn minh.
                      </small>
                    </div>
                </div>
            </div>
            <div className="p-field">
                <Button type="submit" label="Đăng review" className="p-mt-2" />
            </div>
        </form>
    );
}

export default ReviewForm;