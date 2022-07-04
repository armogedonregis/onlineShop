import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Api from "../../components/utils/Api";
import { Product } from "../../models/Product";


export interface Products {
    products: Product[];
    productsCur: Product[];
    loading: boolean;
    sortby: 'LOW' | 'HIGH';
    error: string;
    sortByCat: 'Organic' | 'Fruits' | 'Seafood' | 'Fruits & Vegetables' | 'Backery';
    sortBrand: 'Adidas' | 'Milk' | 'Crab' | 'Ferm' | 'Crous';
    sortCountry: 'Austria' | 'France' | 'Germany' | 'Netherland' | 'Sweden';
    sortPrice: number;
}

export const initialState: Products = {
    loading: false,
    products: [],
    productsCur: [],
    sortby: 'LOW',
    error: '',
    sortByCat: null,
    sortBrand: null,
    sortCountry: null,
    sortPrice: 5000,
}

export const fetchProductList = createAsyncThunk(
    'products/fetchProduct',
    async (_, thunkAPI) => {
        try {
            const res = await Api.get<[Product]>('/products')
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("kek")
        }
    }
)


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProdSort: (state: Products, action: PayloadAction<any>) =>  {
            state.sortby = action.payload
            state.productsCur = state.productsCur.sort((a, b) => state.sortby === 'LOW' ? a.price - b.price : b.price - a.price)
            state.products = state.products.sort((a, b) => state.sortby === 'LOW' ? a.price - b.price : b.price - a.price)
        },
        filterProdCat: (state: Products, action: PayloadAction<any>) => {
            state.sortByCat = action.payload
            if(state.sortByCat != null || state.sortBrand != null || state.sortCountry != null || state.sortPrice <= 5000) {
                state.products = state.productsCur
                if(state.sortByCat != null) {
                    state.products = state.products.filter((todo) => todo.category === state.sortByCat) 
                }
                if(state.sortBrand != null) {
                    state.products = state.products.filter((todo) => todo.brand === state.sortBrand) 
                }
                if(state.sortCountry != null) {
                    state.products = state.products.filter((todo) => todo.country === state.sortCountry) 
                }
                if(state.sortPrice <= 5000) {
                    state.products = state.products.filter((todo) => +todo.price <= +state.sortPrice)
                }
            }
        },
        filterCountry: (state: Products, action: PayloadAction<any>) => {
            state.sortCountry = action.payload
            if(state.sortByCat != null || state.sortBrand != null || state.sortCountry != null || state.sortPrice <= 5000) {
                state.products = state.productsCur
                if(state.sortByCat != null) {
                    state.products = state.products.filter((todo) => todo.category === state.sortByCat) 
                }
                if(state.sortBrand != null) {
                    state.products = state.products.filter((todo) => todo.brand === state.sortBrand) 
                }
                if(state.sortCountry != null) {
                    state.products = state.products.filter((todo) => todo.country === state.sortCountry) 
                }
                if(state.sortPrice <= 5000) {
                    state.products = state.products.filter((todo) => +todo.price <= +state.sortPrice)
                }
            }
        },
        filterBrand: (state: Products, action: PayloadAction<any>) => {
            state.sortBrand = action.payload
            if(state.sortByCat != null || state.sortBrand != null || state.sortCountry != null || state.sortPrice <= 5000) {
                state.products = state.productsCur
                if(state.sortByCat != null) {
                    state.products = state.products.filter((todo) => todo.category === state.sortByCat) 
                }
                if(state.sortBrand != null) {
                    state.products = state.products.filter((todo) => todo.brand === state.sortBrand) 
                }
                if(state.sortCountry != null) {
                    state.products = state.products.filter((todo) => todo.country === state.sortCountry) 
                }
                if(state.sortPrice <= 5000) {
                    state.products = state.products.filter((todo) => +todo.price <= +state.sortPrice)
                }
            }
        },
        filterPrice: (state: Products, action: PayloadAction<any>) => {
            state.sortPrice = action.payload
            if(state.sortByCat != null || state.sortBrand != null || state.sortCountry != null || state.sortPrice <= 5000) {
                state.products = state.productsCur
                if(state.sortByCat != null) {
                    state.products = state.products.filter((todo) => todo.category === state.sortByCat) 
                }
                if(state.sortBrand != null) {
                    state.products = state.products.filter((todo) => todo.brand === state.sortBrand) 
                }
                if(state.sortCountry != null) {
                    state.products = state.products.filter((todo) => todo.country === state.sortCountry) 
                }
                if(state.sortPrice <= 5000) {
                    state.products = state.products.filter((todo) => +todo.price <= +state.sortPrice)
                }
            }
        },
    },
    extraReducers: {
        [fetchProductList.fulfilled.type]: (state, action: PayloadAction<Product[]>) => {
            state.loading = false;
            state.error = '';
            state.products = action.payload;
            state.productsCur = action.payload;
            state.products = state.products.sort((a, b) => state.sortby === 'LOW' ? a.price - b.price : b.price - a.price);
        },
        [fetchProductList.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchProductList.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export const { filterProdSort, filterProdCat, filterCountry, filterBrand, filterPrice } = productsSlice.actions;

export default productsSlice.reducer;

