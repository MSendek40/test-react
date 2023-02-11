import { useState } from "react";
import currencies from "../currencies.js";
import Result from "./Result"
import { FormFieldSet, LabelText,
         FormField, ResultText, ButtonsPosition, ResultButton, 
         FormStyle } from "./styled.js";

const Form = () => {

    const [currency, setCurrency] = useState(currencies[0].short)
    const [amount, setAmount] = useState("")

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

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
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
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