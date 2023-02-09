import { useEffect, useState } from "react";

export const useDataRates = () => {
    const {dataRates, setDataRates} = useState({
        state: "loading"
    }) 

    useEffect(()=> {
        const fetchRates = async () => {
try {
    const response = await fetch("https://api.exchangerate.host/latest?base=PLN")

if (!response.ok) {
    throw new Error (response.statusText)
}
const {rates, date} = await response.json();

setDataRates({
state: "success",
rates,
date, 

});
} catch (error) {
    setDataRates({
        state: "error",
    });
}
};
setTimeout(fetchRates, 1000);

}, []);

return dataRates;

}