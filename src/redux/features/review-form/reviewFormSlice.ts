import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReviewActionType } from '../../../common/type';

export interface ReviewFormState {
    showDialog: boolean,
    data: {
        id: string,
        name: string,
        position: string,
        rating: string,
        review: string,
    },
    companyId: string,
    commentId: string,
    type: ReviewActionType
}

const initialState: ReviewFormState = {
    showDialog: false,
    data: {
        id : '',
        name: '',
        position: '',
        rating: '',
        review: '',
    },
    companyId: '',
    commentId: '',
    type: ReviewActionType.add
}

export const reviewFormSlice = createSlice({
    name: 'review-form',
    initialState,
    reducers: {
        showDialog: (state) => {
            state.showDialog = true;
        },
        hideDialog: (state) => {
            state.showDialog = false;
        },
        resetForm: (state) => {
            state = initialState
        },
        setCompanyId: (state, action: PayloadAction<string>) => {
            state.companyId = action.payload
        },
        setCommentId: (state, action: PayloadAction<string>) => {
            state.commentId = action.payload
        },
        setReviewActionType: (state, action: PayloadAction<ReviewActionType>) => {
            state.type = action.payload
        },
        setFormData: (state, action: PayloadAction<any>) => {
            state.data = action.payload
        },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { showDialog, hideDialog, resetForm, setCompanyId, setCommentId, setReviewActionType, setFormData } = reviewFormSlice.actions
export default reviewFormSlice.reducer