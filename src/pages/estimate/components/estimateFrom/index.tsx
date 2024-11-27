import { ErrorMessage, useFormikContext } from "formik";
import Input from "../../../../components/input";
import Label from "../../../../components/label/input";
import Button from "../../../../components/button";
import SearchDirectionBox from "../../../../components/searchDirectionBox";

export default function EstimateForm() {

    const { handleChange, handleSubmit, setFieldValue } = useFormikContext()

    return <div className="flex flex-col gap-8">
        <div className="flex flex-col" >
            <div className="flex gap-4">
                <Label text="ID do usuário*" htmlFor="customer_id" />
                <ErrorMessage name='customer_id' component='small' />
            </div>
            <Input onChange={handleChange} id="customer_id" />
        </div>
        <div className="flex flex-col" >
            <div className="flex gap-4">
                <Label text="Endereço de origem*" htmlFor="origin" />
                <ErrorMessage name='origin' component='small' />
            </div>
            <SearchDirectionBox id="origin"  onChange={value => setFieldValue('origin', value)} />
        </div>
        <div className="flex flex-col" >
             <div className="flex gap-4">
                <Label text="Endereço de destino*" htmlFor="destination" />
                <ErrorMessage name='destination' component='small' />
            </div>
            <SearchDirectionBox id="destination"  onChange={value => setFieldValue('destination', value)} />
        </div>
        <Button 
            text="estimar o valor da viagem"
            onClick={() => handleSubmit()}
        />
    </div>
}