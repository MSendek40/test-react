import axios from "axios";


export const useRatesData = async () => {

    (async () => {
        try {
        const response = await axios.get("https://api.exchangerate.host/latest");
        console.log(response.data);
        } catch (error) {
        console.error("Something bad happened!", error);
        }
       })();
} 


