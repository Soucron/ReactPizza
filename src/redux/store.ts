import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {filterReducer} from './slices/filterSlice.ts';
import {appReducer} from './slices/appSlice.ts';




export const store = configureStore({
    reducer: {
        filter: filterReducer,
        app: appReducer
    }
})

export type AppRootStateType = ReturnType<typeof store.getState>;



export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppRootStateType
    dispatch: AppDispatch
    rejectValue: null
}>()

