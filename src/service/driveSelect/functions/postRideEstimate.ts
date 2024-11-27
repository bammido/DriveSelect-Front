/* eslint-disable @typescript-eslint/no-explicit-any */
import { driveSelect } from "../driveSelectApi";

interface IPostRideEstimateArgs {
    customer_id: string;
    origin: string;
    destination: string;
}

interface ICoords {
    latitude: number;
    longitude: number
}

export interface IOption {
    id: number;
    name: string;
    description: string;
    vehicle: string;
    value: number;
    review: {
        rating: number;
        comment: string;
    }
}

export interface IPostRideEstimateRes {
    destination: ICoords;
    origin: ICoords;
    duration: string;
    options: IOption[];
    distance: number;
    routeResponse: any;
}

export default async function postRideEstimate({body, onError}: {body: IPostRideEstimateArgs, onError?: (error: any) => void}) {
    try {
        const response = await driveSelect.post<IPostRideEstimateRes>('/ride/estimate', body)

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