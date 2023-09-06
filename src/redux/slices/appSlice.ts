import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isVisible: false,
    searchValue: ''
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
        },
        setSearchValue(state, action: PayloadAction<{searchValue: string}>) {
            state.searchValue = action.payload.searchValue
        }

    }
})


export const appReducer = slice.reducer
export const appActions = slice.actions
export const appThunks = {}

