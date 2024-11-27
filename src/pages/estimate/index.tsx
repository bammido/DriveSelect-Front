/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import postRideEstimate from "../../service/driveSelect/functions/postRideEstimate";
import { useGlobalContext } from "../../context/globalContext";
import { rideFormValidations } from "./validations";
import EstimateForm from "./components/estimateFrom";
import { Formik } from "formik";
import useNavigator from "../../hooks/useNavigator";

export default function Estimate() {
    const { handleEstimate } = useGlobalContext()

    const { gotToOptions } = useNavigator()

    async function handleSubmit(values: {
        customer_id: string,
        origin: string,
        destination: string
    }) {
        try {
            const response = await postRideEstimate({
                body: values,
                onError: (error: any) => {
                    toast.error(error?.response?.data?.error_description || "Erro, verifique a conexão e tente novamente!", {theme: "dark"})
                }
            });

            if(!response) {
                return
            }

            handleEstimate({...response.data, 
                customer_id: values.customer_id, 
                destinationString: values.destination, 
                originString: values.origin
            })
            gotToOptions()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: any) {
            toast.error("Erro, verifique a conexão e tente novamente!", {theme: "dark"})
        }
    }

    return <div className="w-72 sm:w-96 flex flex-col gap-10">
        <h1 className="text-5xl font-bold underline">
            Solicitação de viagem
        </h1>
        <Formik
            initialValues={{
                customer_id: '',
                origin: '',
                destination: ''
            }}
            validationSchema={rideFormValidations}
            onSubmit={handleSubmit}
        >
            <EstimateForm />
        </Formik>
    </div>
}