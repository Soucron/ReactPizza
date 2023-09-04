import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type PizzaBlockType = {
    price: number,
    title: string,
    imageUrl: string,
    size: number,
    type: string,
    id: number,
    count: number
}

const initialState: {
    items: PizzaBlockType[];
    totalPrice: number;
    totalPizzas: number
} = {
    items: [],
    totalPrice: 0,
    totalPizzas: 0
};

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action:PayloadAction<{item: PizzaBlockType }>) {
            const findItem = state.items.find(obj => obj.id === action.payload.item.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({...action.payload.item,
                count: 1})

            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price*obj.count + sum
            }, 0)
            state.totalPizzas += 1
        },
        plusItem(state, action: PayloadAction<{id: number}>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            }
            state.totalPizzas += 1
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price*obj.count + sum
            }, 0)

        },
        removeItem(state, action: PayloadAction<{id: number}>) {
            const item = state.items.find((obj) => obj.id === action.payload.id);
                if (item) {
                if (item.count > 1) {
                    item.count--;
                } else {
                    state.items = state.items.filter((obj) => obj.id !== action.payload.id);
                }
                state.totalPrice -= item.price
                state.totalPizzas -= 1;

            }

        },
        removePizza(state, action: PayloadAction<{id: number}>) {
            const item = state.items.find((obj) => obj.id === action.payload.id);
            if (item) {
                state.items = state.items.filter((obj) => obj.id !== action.payload.id);
                state.totalPrice -= item.price*item.count
                state.totalPizzas -= item.count
            }

        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalPizzas = 0;
        }
    }
})


export const cartReducer = slice.reducer
export const cartActions = slice.actions










