import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { bootsAPI } from '../../../api/api';
import { BootsEntityType } from '../../../api/api-types';

export const getAllBoots = createAsyncThunk('boots/getAllBoots',
    async (_, { rejectWithValue }) => {
        try {
            debugger
            const res = await bootsAPI.getAllBoots();
            return { ...res.data };
        } catch (e) {
            return rejectWithValue({ error: 'something went wrong' });
        }
    }
)


const bootsSlice = createSlice({
    initialState: {} as InitialState,
    name: 'boots',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBoots.fulfilled, (state, action) => {
            state.boots = action.payload;
        });
    }
});

export const bootsReducer = bootsSlice.reducer;

type InitialState = {
    page: number
    boots: BootsEntityType[]
}