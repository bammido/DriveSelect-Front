import moment from "moment"
import formatToBRL from "../../../../helpers/functions/formatToBRL"
import { IRide } from "../../../../service/driveSelect/functions/getRides"
import secondsToHoursMinutes from "../../../../helpers/functions/secondsToHoursMinutes"

export default function RidesList({ rides }: { rides: IRide[] }) {
    return <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Data
                </th>
                <th scope="col" className="px-6 py-3">
                    Ação
                </th>
                <th scope="col" className="px-6 py-3">
                    Origem
                </th>
                <th scope="col" className="px-6 py-3">
                    Destino
                </th>
                <th scope="col" className="px-6 py-3">
                    Distância
                </th>
                <th scope="col" className="px-6 py-3">
                    Duração
                </th>
                <th scope="col" className="px-6 py-3">
                    Valor
                </th>
            </tr>
        </thead>
        <tbody>
            {rides.map(ride => <RideRow key={ride.id} ride={ride} />)}
        </tbody>
    </table>
}

function RideRow({ ride }: { ride: IRide }){
    const seconds = Number(ride.duration.replace('s', ''))
    const { hours, minutes } = secondsToHoursMinutes(seconds)

    return <tr className=" odd:bg-gray-900 even:bg-gray-800 border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
            {ride.id}
        </th>
        <td className="px-6 py-4">
            {moment(ride.date).add(-3, "hours").format("YYYY/MM/DD HH:MM")}
        </td>
        <td className="px-6 py-4">
            {ride.driver.name}
        </td>
        <td className="px-6 py-4">
            {ride.origin}
        </td>
        <td className="px-6 py-4">
            {ride.destination}
        </td>
        <td className="px-6 py-4">
            {Number((ride.distance / 1000).toFixed(2))} km
        </td>
        <td className="px-6 py-4">
            {hours}h {minutes}m
        </td>
        <td className="px-6 py-4 text-green-600">
            {formatToBRL(ride.value)}
        </td>
    </tr>
}