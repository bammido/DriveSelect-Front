/* eslint-disable @typescript-eslint/no-explicit-any */
import { driveSelect } from "../driveSelectApi";

interface IPatchRideConfirmArgs {
    customer_id: string;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    driver: {
        id: number;
        name: string;
    }
    value: number;
   }
   

export interface IPatchRideConfirmRes {
    success: boolean;
}

export default async function patchRideConfrim({body, onError}: {body: IPatchRideConfirmArgs, onError?: (error: any) => void}) {
    try {
        const response = await driveSelect.patch<IPatchRideConfirmRes>('/ride/confirm', body)

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