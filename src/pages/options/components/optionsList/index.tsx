/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { IOption } from "../../../../service/driveSelect/functions/postRideEstimate";
import OptionCard from "./components/optionCard";
import patchRideConfrim from "../../../../service/driveSelect/functions/patchRideConfirm";
import { useGlobalContext } from "../../../../context/globalContext";
import useNavigator from "../../../../hooks/useNavigator";

export default function OptionsList({ options }: {options: IOption[]}) {
    const { estimate } = useGlobalContext()

    const { goToHistory } = useNavigator()

    async function handleSubmit(option: IOption) {
        try {

            if(!estimate) {
                return
            }

            const response = await patchRideConfrim({
                body: {
                    customer_id: estimate.customer_id,
                    destination: estimate.destinationString,
                    distance: estimate.distance,
                    driver: {
                        id: option.id,
                        name: option.name
                    },
                    duration: estimate.duration,
                    origin: estimate.originString,
                    value: option.value
                },
                onError: (error: any) => {
                    toast.error(error?.response?.data?.error_description || "Erro, verifique a conexão e tente novamente!", {theme: "dark"})
                }
            })

            if(!response) {
                return
            }

            goToHistory(estimate.customer_id)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: any) {
            toast.error("Erro!", {theme: "dark"})
        }
    }

    return <div className="flex flex-wrap gap-4">
        {
            options.map(option => <OptionCard key={option.id} option={option} handleSubmit={handleSubmit} /> )
        }
    </div>
}