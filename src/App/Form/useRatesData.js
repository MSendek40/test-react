import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
const [ratesData, setRatesData] = useState({
    state: "loading", 
})

useEffect( () => { 
    const loadDataRates = async () => {

try {const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");

setRatesData ({
    rates: response.data.rates,
    date: response.data.date,
    state: "sukces"
});

} catch{ setRatesData({
    state: "error"
});
};
    };
setTimeout(loadDataRates, 1000);
}, [] )

return ratesData 
} 
    