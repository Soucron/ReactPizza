import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {appActions} from './appSlice.ts';
import axios from 'axios';


const initialState: {
    pizzas: PizzasType[]
} = {
    pizzas: []
}


const slice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(pizzaThunks.fetchPizza.fulfilled, (state, action) => {
                state.pizzas = action.payload.pizzas
            })
    }
})


// thunks

const fetchPizza = createAsyncThunk<{pizzas: PizzasType[]}, {fetchingUrl: string}>(
    'pizza/fetchPizzas', async ({fetchingUrl}, thunkApi) => {
    const {dispatch, rejectWithValue} = thunkApi;
        try {
            dispatch(appActions.setIsLoading({isLoading: true}))
            const res = await axios.get(fetchingUrl)
            dispatch(appActions.setIsLoading({isLoading: false}))
            return {pizzas: res.data}
        } catch (e) {
            console.log(e)
            return rejectWithValue(null);
        } finally {
        dispatch(appActions.setIsLoading({isLoading: false}))
    }
});


export const pizzaReducer = slice.reducer
export const pizzaActions = slice.actions
export const pizzaThunks = {fetchPizza}


export type PizzasType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
    count: number
};



