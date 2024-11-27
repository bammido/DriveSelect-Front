/* eslint-disable @typescript-eslint/no-explicit-any */
import { driveSelect } from "../driveSelectApi";

interface IGetRideCustomerDriversArgs {
    customer_id: string;
}

export interface IDrivers {
    id: number;
    name: string;
}
   
export interface IGetRideCustomerDriversRes {
    drivers: IDrivers[]
}
   

export default async function getRideCustomerDrivers({query, onError}: {query: IGetRideCustomerDriversArgs, onError?: (error: any) => void}) {
    try {
        const response = await driveSelect.get<IGetRideCustomerDriversRes>(`/ride/${query.customer_id}/drivers`)

        return {
            status: 200,
            data: response.data
        }
    } catch (error: any) {
        if(onError){
            onError(error)
        } 
    }
}