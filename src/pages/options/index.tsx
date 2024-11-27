import Button from "../../components/button";
import Directions from "../../components/map";
import { useGlobalContext } from "../../context/globalContext";
import useNavigator from "../../hooks/useNavigator";
import OptionsList from "./components/optionsList";

export default function Options() {
    const { estimate } = useGlobalContext()
    const { gotToHome } = useNavigator()

    return <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold underline text-center">Opções de viagem</h1>
        {estimate && <div className="self-center w-72 sm:w-full flex flex-col gap-10">
            <Directions 
                origin={estimate.originString}
                destination={estimate.destinationString}
                duration={estimate.duration}
                distance={estimate.distance}
            />
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