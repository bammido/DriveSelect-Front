/* eslint-disable @typescript-eslint/no-explicit-any */
import { driveSelect } from "../driveSelectApi";

interface IgetRidesArgs {
    customer_id: string;
    driver_id?: number; 
}

export interface IRide {
    id: number,
    date: Date,
    origin: string,
    destination: string,
    distance: number,
    duration: string,
    driver: {
        id: number,
        name: string
    },
    value: number
}
   
export interface IgetRidesRes {
    customer_id: string,
    rides: IRide[]
}
   

export default async function getRides({query, onError}: {query: IgetRidesArgs, onError?: (error: any) => void}) {
    try {
        const url = `/ride/${query.customer_id}`
        const response = await driveSelect.get<IgetRidesRes>(query.driver_id? url + `?driver_id=${query.driver_id}` : url)

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