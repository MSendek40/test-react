import { useState } from "react";
import Result from "./Result"
import {
    FormFieldSet,
    LabelText,
    FormField,
    ResultText,
    ButtonsPosition,
    ResultButton,
    FormStyle,
    Loading,
    Failure
} from "./styled.js";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResults = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResults(currency, amount);
    }

    return (
        <FormStyle onSubmit={onSubmit}>
            <h1>
                Przelicznik walut
            </h1>
            <FormFieldSet>
                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Sekunda... 🙂 <br />Ładuję kursy z Europejskiego Banku Centralnego.
                        </Loading>
                    )
                    : (
                        ratesData.state === "error" ? (
                            <Failure>
                                Hmm... Coś poszło nie tak 1F914	🤔 Sprawdź, czy masz połączenie z internetem.
                            </Failure>
                        ) : (
                            <>
                                <p>
                                    <label>
                                        <LabelText>
                                            Kwota w zł*:
                                        </LabelText>
                                        <FormField
                                            value={amount}
                                            onChange={({ target }) => setAmount(target.value)}
                                            placeholder="Wpisz kwotę w złotych"
                                            type="number"
                                            required
                                            step="0.01"
                                        />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <LabelText>
                                            Waluta:
                                        </LabelText>
                                        <FormField
                                            as="select"
                                            value={currency}
                                            onChange={({ target }) => setCurrency(target.value)}
                                        >
                                            {Object.keys(ratesData.rates).map(((currency) => (
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
                                    <span>
                                        <ResultButton>Przelicz kurs</ResultButton>
                                    </span>
                                </ButtonsPosition>
                                <ResultText> Twoja kowta wynosi </ResultText>
                                <p>

                                    <Result result={result} />
                                </p>
                            </>
                        )
                    )}
            </FormFieldSet>
        </FormStyle>
    );
};

export default Form