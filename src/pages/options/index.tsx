import { useGlobalContext } from "../../context/globalContext";
import OptionsList from "./components/optionsList";

export default function Options() {
    const { estimate } = useGlobalContext()
    
    return <div>
        {estimate && <div className="w-72 sm:w-full">
            <OptionsList options={estimate?.options} />
        </div>}
        {!estimate && <h1 className="text-5xl font-bold underline">
            Opções de viagem
        </h1>}
    </div>
}