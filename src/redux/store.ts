import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import companyDetailSlice from './features/company-detail/companyDetailSlice'
import reviewFormSlice from './features/review-form/reviewFormSlice'

export const store = configureStore({
  reducer: {
    reviewForm: reviewFormSlice,
    companyDetail: companyDetailSlice
  },
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>