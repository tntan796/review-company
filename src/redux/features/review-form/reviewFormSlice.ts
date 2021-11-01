import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReviewActionType } from '../../../common/type';
import { Review } from '../../../models/review.model';
import reviewService from '../../../services/review.service';

export interface ReviewFormState {
    showDialog: boolean,
    data: {
        id: string,
        name: string,
        position: string,
        rating: string,
        review: string,
    },
    companyId: number | null,
    commentId: string | null,
    type: ReviewActionType,
    loading: boolean
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
    companyId: -1,
    commentId: '',
    type: ReviewActionType.add,
    loading: false
}

export const setReview = createAsyncThunk('review/reply', async(data: Review) => {
    const response = await reviewService.setReview(data);
    return response.data;
})

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
        setCompanyId: (state, action: PayloadAction<number | null>) => {
            state.companyId = action.payload
        },
        setCommentId: (state, action: PayloadAction<string | null>) => {
            state.commentId = action.payload
        },
        setReviewActionType: (state, action: PayloadAction<ReviewActionType>) => {
            state.type = action.payload
        },
        setFormData: (state, action: PayloadAction<any>) => {
            state.data = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(setReview.pending, (state, action) => {

        })
        builder.addCase(setReview.rejected, (state, action) => {
            state.loading = false;
        })
        builder.addCase(setReview.fulfilled, (state, action) => {
            state.loading = false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { showDialog, hideDialog, resetForm, setCompanyId, setCommentId, setReviewActionType, setFormData, setLoading } = reviewFormSlice.actions;
export default reviewFormSlice.reducer