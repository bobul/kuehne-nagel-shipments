import {IShipments} from "../../../shared/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchShipments} from "../action/actionCreator.ts";

interface ShipmentsState {
    shipments: IShipments[];
    error: string;
    isLoading: boolean;
}

const initialState: ShipmentsState = {
    shipments: [],
    error: '',
    isLoading: false,
}

export const shipmentsSlice = createSlice({
    name: 'shipments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchShipments.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchShipments.fulfilled.type]: (state, action: PayloadAction<IShipments[]>) => {
            state.isLoading = false;
            state.error = '';
            state.shipments = action.payload;
        },
        [fetchShipments.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default shipmentsSlice.reducer;