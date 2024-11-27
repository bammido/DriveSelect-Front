import Button from "../../components/button";
import { useGlobalContext } from "../../context/globalContext";
import useNavigator from "../../hooks/useNavigator";
import OptionsList from "./components/optionsList";

export default function Options() {
    const { estimate } = useGlobalContext()
    const { gotToHome } = useNavigator()

    return <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold underline text-center">Opções de viagem</h1>
        {estimate && <div className="w-72 sm:w-full">
            <OptionsList options={estimate?.options} />
        </div>}
        {!estimate && <div>
            <span>nenhuma opção encontrada!</span>    
            <Button 
                text="buscar nova rota"
                onClick={gotToHome}
            />
        </div>}
    </div>
}