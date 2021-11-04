import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Company } from '../../../models/company.model';
import { Review } from '../../../models/review.model';
import companyService from '../../../services/company.service';
export const getCompanyDetail = createAsyncThunk('company/detail', async(params, thunkAPI) => {
    const companyDetail = await companyService.getCompanyById(5);
    return companyDetail.data.Data;
})

export interface CompanyDetailState {
    company?: Company,
    reviews?: Review[],
    ratingAverage?: number[]
}

const initialState: CompanyDetailState = {
    company: undefined,
    reviews: [],
    ratingAverage: []
}

export const companyDetailSlice = createSlice({
    name: 'review-form',
    initialState,
    reducers: {
        setReviews: (state, action: PayloadAction<Review[]>) => {
            state.reviews = action.payload
        },
        setDetail: (state, action: PayloadAction<Company>) => {
            state.company = action.payload
        },
        setRatingAverage: (state, action: PayloadAction<number[]>) => {
            state.ratingAverage = action.payload
        },
        addReview: (state, action: PayloadAction<Review>) => {
            if (action.payload.ParentId === null) {
                // Add review cha
                state.reviews?.unshift(action.payload);
            } else {
                // Add review con
                const findReview = state.reviews?.find(t => t.Id === action.payload.ParentId);
                if (findReview) {
                    findReview.Replies?.unshift(action.payload);
                }
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setReviews, setDetail, addReview, setRatingAverage } = companyDetailSlice.actions
export default companyDetailSlice.reducer