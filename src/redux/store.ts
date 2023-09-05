import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {filterReducer} from './slices/filterSlice.ts';
import {appReducer} from './slices/appSlice.ts';
import {cartReducer} from './slices/cartSlice.ts';
import {pizzaReducer} from './slices/pizzaSlice.ts';




export const store = configureStore({
    reducer: {
        filter: filterReducer,
        app: appReducer,
        cart: cartReducer,
        pizza: pizzaReducer
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

