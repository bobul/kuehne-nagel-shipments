import {AxiosResponse} from 'axios';
import {IShipments} from "../../shared/models";
import {$api} from "../../shared/http";
export class ShipmentsService {
    static async fetchShipments(): Promise<AxiosResponse<IShipments[]>> {
        return $api.get<IShipments[]>('orders');
    }
}