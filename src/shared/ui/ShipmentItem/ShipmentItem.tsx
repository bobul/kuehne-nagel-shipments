import {Button, Dialog, Flex, Table, Text, TextField, Box} from "@radix-ui/themes";
import {IShipments} from "../../models";
import {useState} from "react";
import {deleteShipment, updateShipment} from "../../../entities/shipments/model";
import {useAppDispatch} from "../../hooks";
import {Cross1Icon, IdCardIcon} from "@radix-ui/react-icons";

interface ShipmentItemProps {
    shipment: IShipments;
}

export const ShipmentItem: React.FC<ShipmentItemProps> = ({shipment}) => {
    const dispatch = useAppDispatch();

    const [selectedShipment, setSelectedShipment] = useState<IShipments>({...shipment});

    const handleDelete = (orderNo: string): void => {
        dispatch(deleteShipment(orderNo));
    }

    const handleUpdate = (updatedShipment: IShipments): void => {
        console.log(updatedShipment)
        dispatch(updateShipment(updatedShipment));
    }

    return (
        <Table.Row>
            <Table.RowHeaderCell>{shipment.orderNo}</Table.RowHeaderCell>
            <Table.Cell>{shipment.date}</Table.Cell>
            <Table.Cell>{shipment.customer}</Table.Cell>
            <Table.Cell>{shipment.trackingNo}</Table.Cell>
            <Table.Cell>{shipment.status}</Table.Cell>
            <Table.Cell>{shipment.consignee}</Table.Cell>
            <Table.Cell>
                <Flex gap="2">
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button color="sky">
                                <IdCardIcon/>
                            </Button>
                        </Dialog.Trigger>

                        <Dialog.Content style={{maxWidth: "fit-content"}}>
                            <Dialog.Title>Shipment details</Dialog.Title>
                            <Dialog.Description size="2"
                                                mb="4">
                                You can make changes to this shipment.
                            </Dialog.Description>

                            <Flex gap="3">
                                <Box>
                                    <label>
                                        <Text as="div"
                                              size="2"
                                              mb="1"
                                              weight="bold">
                                            Order No
                                        </Text>
                                        <TextField.Input
                                            size="3"
                                            style={{minWidth: '300px'}}
                                            value={selectedShipment.orderNo}
                                            disabled
                                            placeholder="Enter order number"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div"
                                              size="2"
                                              mb="1"
                                              weight="bold">
                                            Delivery Date
                                        </Text>
                                        <TextField.Input
                                            size="3"
                                            style={{minWidth: '300px'}}
                                            value={selectedShipment.date}
                                            onChange={(e) => setSelectedShipment({
                                                ...selectedShipment,
                                                date: e.target.value
                                            })}
                                            placeholder="Enter delivery date"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div"
                                              size="2"
                                              mb="1"
                                              weight="bold">
                                            Customer
                                        </Text>
                                        <TextField.Input
                                            size="3"
                                            style={{minWidth: '300px'}}
                                            value={selectedShipment.customer}
                                            onChange={(e) => setSelectedShipment({
                                                ...selectedShipment,
                                                customer: e.target.value
                                            })}
                                            placeholder="Enter customer"
                                        />
                                    </label>
                                </Box>
                                <Box>
                                    <label>
                                        <Text as="div"
                                              size="2"
                                              mb="1"
                                              weight="bold">
                                            Tracking No
                                        </Text>
                                        <TextField.Input
                                            size="3"
                                            style={{minWidth: '300px'}}
                                            value={selectedShipment.trackingNo}
                                            onChange={(e) => setSelectedShipment({
                                                ...selectedShipment,
                                                trackingNo: e.target.value
                                            })}
                                            placeholder="Enter tracking number"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div"
                                              size="2"
                                              mb="1"
                                              weight="bold">
                                            Status
                                        </Text>
                                        <TextField.Input
                                            size="3"
                                            style={{minWidth: '300px'}}
                                            value={selectedShipment.status}
                                            onChange={(e) => setSelectedShipment({
                                                ...selectedShipment,
                                                status: e.target.value
                                            })}
                                            placeholder="Enter status"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div"
                                              size="2"
                                              mb="1"
                                              weight="bold">
                                            Consignee
                                        </Text>
                                        <TextField.Input
                                            size="3"
                                            style={{minWidth: '300px'}}
                                            value={selectedShipment.consignee}
                                            onChange={(e) => setSelectedShipment({
                                                ...selectedShipment,
                                                consignee: e.target.value
                                            })}
                                            placeholder="Enter consignee"
                                        />
                                    </label>
                                </Box>
                            </Flex>

                            <Flex gap="3"
                                  mt="4"
                                  justify="end">
                                <Dialog.Close>
                                    <Button variant="soft"
                                            color="gray">Cancel</Button>
                                </Dialog.Close>
                                <Dialog.Close>
                                    <Button onClick={() => handleUpdate(selectedShipment)}>Save</Button>
                                </Dialog.Close>
                            </Flex>
                        </Dialog.Content>
                    </Dialog.Root>
                    <Button onClick={() => handleDelete(shipment.orderNo)} color="tomato">
                        <Cross1Icon/>
                    </Button>
                </Flex>
            </Table.Cell>
        </Table.Row>
    );
};