import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getRides, { IRide } from "../../service/driveSelect/functions/getRides"
import DropDown from "../../components/dropDown"
import getRideCustomerDrivers, { IDrivers } from "../../service/driveSelect/functions/getRideCustomerDrivers"
import RidesList from "./components/ridesList"
import Button from "../../components/button"
import { toast } from "react-toastify"

export default function History() {
    const { customer_id } = useParams()
    const [rides, setRides] = useState<IRide[]>([])
    const [drivers, setDrivers] = useState<IDrivers[]>([])
    const [selectedDriver, setSelectedDriver] = useState< number | null >(null)

    async function getDrivers() {
        try {
            const drivers = await getRideCustomerDrivers({
                query: { customer_id: customer_id! },
                     onError: (error) => toast.error(error?.response?.data?.error_description || "Erro, verifique a conexão e tente novamente!", {theme: "dark"})
             })
     
             if(!drivers) {
                 return
             }
     
             setDrivers(drivers.data.drivers)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Erro, verifique a conexão e tente novamente!", {theme: "dark"})
        }
    }

    const memorizedGetDrivers = useCallback(
        getDrivers,
        []
    )
    const memorizedSearch = useCallback(
        search,
        [customer_id]
    )

    async function search() {
        type Query = {
            customer_id: string;
            driver_id?: number;
        } 

        const query: Query = {
            customer_id: customer_id!,
        }

        if(selectedDriver) {
            query.driver_id = selectedDriver
        }

        const response = await getRides({
            query
        })

        if(!response){
            return
        }

        setRides(response.data.rides)
    }

    useEffect(() => {
        memorizedGetDrivers()
    }, [memorizedGetDrivers])
    
    useEffect(() => {
        memorizedSearch()
    }, [memorizedSearch])


    return <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold underline text-center">Histórico de viagens</h1>
        <span>ID de usuário: {customer_id}</span>
        <div className="flex gap-4 items-start">
            <DropDown<number | null>
                options={[...drivers.map(driver => ({ label: driver.name, value: driver.id })), { label: 'Todos', value: 0 }]}
                onChange={(value: number | null) => {
                    setSelectedDriver(value)
                }}
                value={selectedDriver}
                emptyMessage="Selecione um motorista"
            />
            <Button
                text="Aplicar filtro"
                onClick={search}
            />
        </div>
        <div className="overflow-x-scroll sm:overflow-x-auto w-96 self-center lg:w-full ">
            <RidesList rides={rides} />
        </div>
    </div>
}