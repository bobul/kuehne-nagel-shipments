import {createAsyncThunk} from "@reduxjs/toolkit";
import {ShipmentsService} from "../../../features/service";

export const fetchShipments = createAsyncThunk(
    'shipments/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await ShipmentsService.fetchShipments();
            return response.data;
        } catch (e: any) {
            throw thunkAPI.rejectWithValue(e.message)
        }
    }
);