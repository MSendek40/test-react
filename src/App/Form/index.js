import { useState } from "react";
import currencies from "../currencies.js";
import Result from "./Result"
import "./style.css";

const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short)
    const [amount, setAmount] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__header">Kantor wymiany walut</h1>
            <fieldset className="form__fieldset">
                <p>
                    <label>
                        <span className="form__labelText"> Kwota PLN do wymiany </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="wpisz kwotę w PLN"
                            className="form__field"
                            type="number"
                            min="0.1"
                            step="0.1"
                            required />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę </span>
                        <select className="form__field"
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
                        </select>
                    </label>
                </p>
                <div className="buttons_position">
                    <span> <button className="form__buttons"
                    > przelicz kurs </button> </span>
                </div>


                <p className=".form__resultText">  Twoja kwota wynosi </p>

                <p>
                    <Result
                        result={result}

                    />
                </p>

            </fieldset>

        </form>

    );
}


export default Form