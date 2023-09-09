import {combineReducers, configureStore} from "@reduxjs/toolkit";
import shipmentsReducer from "../../entities/shipments/model/shipments"

const rootReducer = combineReducers({
    shipmentsReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']