import { useNavigate } from "react-router-dom";

export default function useNavigator() {
    const navigation = useNavigate()
    
    function gotToHome() {
        navigation('/')
    }
    function gotToOptions() {
        navigation('/options')
    }

    return {
        gotToHome,
        gotToOptions
    }
}