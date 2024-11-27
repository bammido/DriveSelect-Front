import Button from "../../../../../../components/button";
import StarIcon from "../../../../../../components/starIcon";
import formatToBRL from "../../../../../../helpers/functions/formatToBRL";
import { IOption } from "../../../../../../service/driveSelect/functions/postRideEstimate";

export default function OptionCard({ option, handleSubmit }: { option: IOption, handleSubmit: (option: IOption) => void }) {
    return <div className="max-w-sm p-4 rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col justify-between">
    <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{option.name}</h5>
        <p className="mb-3 font-normal text-gray-200">{option.description}</p>
        <div className="flex flex-col">
            <div className="flex justify-end">
                <small className="text-gray-400 flex gap-2">
                <StarIcon /> {option.review.rating} / 5
                </small>
            </div>
            <small className="mb-3 font-normal text-gray-400">{option.review.comment}</small>
        </div>
        </div>
    <div className="flex font-bold justify-between items-center">
        <span className="text-green-600">{formatToBRL(option.value)}</span>
        <Button 
            text="Escolher"
            onClick={() => handleSubmit(option)}
        />
    </div>
</div>
}