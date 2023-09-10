import {AxiosResponse} from 'axios';
import {IShipment} from "../../shared/models";
import {$api} from "../../shared/http";
export class ShipmentsService {
    static async fetchShipments(): Promise<AxiosResponse<IShipment[]>> {
        return $api.get<IShipment[]>('orders');
    }
}