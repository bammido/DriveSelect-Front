import { createContext, useContext, useState } from "react";
import { IPostRideEstimateRes } from "../service/driveSelect/functions/postRideEstimate";

const globalContext = createContext<null | IGlobalContext>(null)

interface IGlobalContext {
    estimate: IEstimate | null;
    handleEstimate: (estimate: IEstimate) => void
}

export interface IEstimate extends IPostRideEstimateRes {
    customer_id: string;
    originString: string;
    destinationString: string;
}

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
    const [estimate, setEstimate] = useState<null | IEstimate>(null)
    
    function handleEstimate(newEtimate: IEstimate) {
        setEstimate(newEtimate)
    }

    return <globalContext.Provider value={{
        handleEstimate,
        estimate
    }}>
        {children}
    </globalContext.Provider>
}

export function useGlobalContext() {
    return useContext(globalContext) as IGlobalContext
}