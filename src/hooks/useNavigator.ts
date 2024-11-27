import { useNavigate } from "react-router-dom";

export default function useNavigator() {
    const navigation = useNavigate()
    
    function gotToHome() {
        navigation('/')
    }
    
    function gotToOptions() {
        navigation('/options')
    }
    
    function goToHistory(customer_id: string) {
        navigation(`/history/${customer_id}`)
    }

    return {
        gotToHome,
        gotToOptions,
        goToHistory
    }
}