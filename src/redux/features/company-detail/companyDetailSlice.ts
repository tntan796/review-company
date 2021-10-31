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
    reviews?: Review[]
}

const initialState: CompanyDetailState = {
    company: undefined,
    reviews: []
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
    },
})

// Action creators are generated for each case reducer function
export const { setReviews, setDetail } = companyDetailSlice.actions
export default companyDetailSlice.reducer