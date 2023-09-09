import {useAppDispatch, useAppSelector} from "../../shared/hooks";
import {useEffect} from "react";
import {fetchShipments} from "../../entities/shipments/action/actionCreator.ts";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const {shipments, error, isLoading} = useAppSelector(state => state.shipmentsReducer);

    useEffect(() => {
        dispatch(fetchShipments());
    }, [])

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {<pre>{JSON.stringify(shipments, null, 2)}</pre>};
        </div>
    );
}