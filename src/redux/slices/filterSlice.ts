import {createSlice, PayloadAction} from '@reduxjs/toolkit';



const initialState = {
    currentCategory: 0,
    selectedSort: 0,
    list : [
        {name: 'популярности (ASC)', sort: 'rating', asc: true},
        {name: 'популярности (DESC)', sort: 'rating', asc: false},
        {name: 'цене (ASC)', sort: 'price', asc: true},
        {name: 'цене (DESC)', sort: 'price', asc: false},
        {name: 'алфавиту (ASC)', sort: 'title', asc: true},
        {name: 'алфавиту (DESC)', sort: 'title', asc: false}
    ]

}

const slice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCurrentCategory(state, action:PayloadAction<{currentCategory: number}> ) {
            state.currentCategory = action.payload.currentCategory
        },
        setSelectedSort(state, action:PayloadAction<{selectedSort: number}>) {
            state.selectedSort = action.payload.selectedSort
        }
    }
})


export const filterReducer = slice.reducer
export const filterActions = slice.actions
export const filterThunks = {}



export type filterListType = {
    name: string,
    sort: string,
    asc: boolean
}

