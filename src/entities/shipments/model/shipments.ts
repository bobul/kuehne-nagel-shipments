import {IShipments} from "../../../shared/models";
import {createSlice} from "@reduxjs/toolkit";

interface ShipmentsState {
    shipments: IShipments;
    error: string;
    isLoading: boolean;
}

const initialShipmentsState: IShipments = {
    orderNo: '',
    date: '',
    customer: '',
    trackingNo: '',
    status: '',
    consignee: '',
}

const initialState: ShipmentsState = {
    shipments: initialShipmentsState,
    error: '',
    isLoading: false,
}

export const shipmentsSlice = createSlice({
    name: 'shipments',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default shipmentsSlice.reducer;