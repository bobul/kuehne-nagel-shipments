import {useAppDispatch, useAppSelector} from "../../shared/hooks";
import {useEffect} from "react";
import {fetchShipments} from "../../entities/shipments/action";
import {Table} from "@radix-ui/themes";
import {Error, Loader, ShipmentItem} from "../../shared/ui";
import styles from "./ShipmentsTable.module.css"

export const ShipmentsTable = () => {
    const dispatch = useAppDispatch();
    const {shipments, error, isLoading} = useAppSelector(state => state.shipmentsReducer);
    const tableHeaders = ["ORDERNO", "DELIVERYDATE", "CUSTOMER", "TRACKINGNO", "STATUS", "CONSIGNEE"];

    useEffect(() => {
        dispatch(fetchShipments());
    }, [dispatch])

    if (isLoading) {
        return <Loader className={styles.loader}/>;
    }

    if (error) {
        return <Error message={error} className={styles.error}/>;
    }

    return (
        <Table.Root variant="surface">
            <Table.Header>
                <Table.Row>
                    {tableHeaders.map((header) => (
                        <Table.ColumnHeaderCell key={header}>{header}</Table.ColumnHeaderCell>
                    ))}
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {shipments.map((shipment) => (
                    <ShipmentItem key={shipment.orderNo} shipment={shipment}/>
                ))}
            </Table.Body>
        </Table.Root>
    );
};