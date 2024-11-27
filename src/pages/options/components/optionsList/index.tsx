import { IOption } from "../../../../service/driveSelect/functions/postRideEstimate";
import OptionCard from "./components/optionCard";

export default function OptionsList({ options }: {options: IOption[]}) {
    return <div className="flex flex-wrap gap-4">
        {
            options.map(option => <OptionCard key={option.id} option={option} /> )
        }
    </div>
}