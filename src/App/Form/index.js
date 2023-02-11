import { useState } from "react";
import Result from "./Result"
import { FormFieldSet, 
         LabelText,
         FormField, 
         ResultText, 
         ButtonsPosition, 
         ResultButton, 
         FormStyle } from "./styled.js";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const [currency, setCurrency] = useState("EUR")
    const [amount, setAmount] = useState("")
    const [result, setResult] = useState();

const ratesData = useRatesData();


    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency]

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <FormStyle
            onSubmit={onSubmit}>
            <h1>Kantor wymiany walut</h1>
            <FormFieldSet>
                <p>
                    <label>
                        <LabelText> Kwota PLN do wymiany </LabelText>
                        <FormField
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="wpisz kwotę w PLN"
                            type="number"
                            min="0.1"
                            step="0.1"
                            required />
                    </label>
                </p>
                <p>
                    <label>
                        <LabelText>Wybierz walutę </LabelText>
                        <FormField as = "select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {Object.keys(ratesData.rates).map((currency => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            )))}
                        </FormField>
                    </label>
                </p>
                <ButtonsPosition>
                    <span> <ResultButton
                    > przelicz kurs </ResultButton> </span>
                </ButtonsPosition>
                <ResultText>  Twoja kwota wynosi </ResultText>
                <p>
                    <Result
                        result={result}
                    />
                </p>
            </FormFieldSet>
        </FormStyle>
    );
}


export default Form