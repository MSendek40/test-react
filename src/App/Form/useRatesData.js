import axios from "axios";
import { useState, useEffect } from 'react';

const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
      const {rates, date} = await response.data

        setRatesData({
          state: "success",
          rates: response.data.rates,
          date: response.data.date,
        });
      }
      catch {
        setRatesData({
          state: "error",
        });
      }
    };
    
    setTimeout(fetchRates, 1000);
  }, []);

  return ratesData;
};

export default useRatesData