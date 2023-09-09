import {useAppDispatch, useAppSelector} from "../../shared/hooks";
import {useEffect} from "react";
import {fetchShipments} from "../../entities/shipments/action";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export const ShipmentsTable = () => {
    const dispatch = useAppDispatch();
    const {shipments, error, isLoading} = useAppSelector(state => state.shipmentsReducer);


    useEffect(() => {
        dispatch(fetchShipments());
    }, [dispatch])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Order No</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Tracking No</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Consignee</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shipments.map((shipment) => (
                        <TableRow key={shipment.orderNo}>
                            <TableCell>{shipment.orderNo}</TableCell>
                            <TableCell>{shipment.date}</TableCell>
                            <TableCell>{shipment.customer}</TableCell>
                            <TableCell>{shipment.trackingNo}</TableCell>
                            <TableCell>{shipment.status}</TableCell>
                            <TableCell>{shipment.consignee}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};