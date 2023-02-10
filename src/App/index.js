import currencies from "./currencies.js";
import { useState } from "react";
import Form from "./Form";
import Clock from "./Clock/index.js";
import { AppStyle } from "./styled.js";

function App() {

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    return (
        < AppStyle>
            <Clock/>
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </AppStyle>
    );
}

export default App;
