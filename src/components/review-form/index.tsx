import React, { useState } from 'react';
import './styles.scss';
import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { useDispatch, useSelector } from 'react-redux';
import { hideDialog, setFormData, setReview, showDialog } from '../../redux/features/review-form/reviewFormSlice';
import { Review } from '../../models/review.model';
import { RootState } from '../../redux/store';
import { ReviewActionType } from '../../common/type';
type PropsType = {
    // closeModel: () => void
}
type RateType = {
    name: string;
    code: string;
}
function ReviewForm(props: PropsType) {
    const dispatch = useDispatch();
    const type = useSelector((state: RootState) => state.reviewForm.type);
    const commentId = useSelector((state: RootState) => state.reviewForm.commentId);
    const companyId = useSelector((state: RootState) => state.reviewForm.companyId);
    const [ratings, setRatings] = useState(
        [
            { "name": "1 điểm - Max chán, né gấp kẻo hối không kịp", "code": '1' },
            { "name": "2 điểm - Hơi chán, để xem sao", "code": '2' },
            { "name": "3 điểm - Công ty bình thường", "code": '3' },
            { "name": "4 điểm - Công ty tốt, nên làm lâu dài", "code": '4' },
            { "name": "5 điểm - Công ty đỉnh, đuổi không đi", "code": '5' },
        ])
    const formik: any = useFormik({
        initialValues: {
            ...(new Review()),
            Star: { "name": "3 điểm - Công ty bình thường", "code": '3' },
        },
        validate: (data: Review) => {
            let errors: any = {};
            if (!data.Comment) {
                errors.Comment = 'Vui lòng nhập thông tin đánh giá!';
            }
            return errors;
        },
        onSubmit: (data: Review) => {
            const dataSave: Review = {
                ...data,
                Star: (data.Star as RateType).code,
                CompanyId: companyId,
                ParentId: commentId,
                Favourite: type,
                Created: (new Date()).getTime()
            };
            dispatch(hideDialog());
            dispatch(setReview(dataSave));
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
                            <InputText id="UserName" name="UserName" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('UserName') })} />
                            <label htmlFor="UserName" className={classNames({ 'p-error': isFormFieldValid('UserName') })}>Tên</label>
                        </span>
                    </div>
                    {/* <div className="p-field p-col-12">
                        <span className="p-float-label">
                            <InputText id="position" name="position" value={formik.values.position} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('position') })} />
                            <label htmlFor="position" className={classNames({ 'p-error': isFormFieldValid('position') })}>Chức vụ</label>
                        </span>
                    </div> */}
                    <div className="p-field p-col-12">
                        <span className="p-float-label">
                            <InputTextarea rows={5} id="Comment" cols={30} value={formik.values.Comment} autoFocus onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('Comment') })} />
                            <label htmlFor="Comment" className={classNames({ 'p-error': isFormFieldValid('Comment') })}>Review công ty <span className="text-danger"> *</span></label>
                        </span>
                        {getFormErrorMessage('Comment')}
                    </div>
                    {
                        type === ReviewActionType.add ?
                            <div className="p-field p-col-12">
                                <span className="p-float-label">
                                    <Dropdown id="Star" name="Star" value={formik.values.Star} onChange={formik.handleChange} options={ratings} optionLabel="name" />
                                    <label htmlFor="Star">Đánh giá</label>
                                </span>
                            </div>
                            : null
                    }

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