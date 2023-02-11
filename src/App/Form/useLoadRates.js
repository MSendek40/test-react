import axios from "axios";
import { useState, useEffect } from "react";

export const useLoadRates = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading"
    });


    useEffect(() => {
        const loadRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");

                setRatesData({
                    rates: response.data.rates,
                    date: response.data.date,
                    state: "succes",
                })
            }

            catch {
                setRatesData({
                    state: "error",

                });
            };
        };
        setTimeout(loadRates, 1000);
    }, []);

    return ratesData
};









