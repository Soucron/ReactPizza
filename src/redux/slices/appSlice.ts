import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isVisible: false

}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoading(state, action:PayloadAction<{isLoading: boolean}> ) {
            state.isLoading = action.payload.isLoading
        },
        setIsVisible(state, action: PayloadAction<{isVisible: boolean}>) {
            state.isVisible = action.payload.isVisible
        }
    }
})


export const appReducer = slice.reducer
export const appActions = slice.actions
export const appThunks = {}

