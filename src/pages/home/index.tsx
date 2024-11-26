import { Formik, FormikHelpers } from "formik";
import RideForm from "./components/rideFrom";
import { rideFormValidations } from "./validations";

export default function Home() {
    return <div className="flex flex-col justify-center items-center gap-6 p-8">
        <div className="w-96 flex flex-col gap-10">
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
                onSubmit={() => {}}
            >
                <RideForm />
            </Formik>
        </div>
    </div>
}