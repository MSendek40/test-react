import currencies from "./currencies.js";
import { useState } from "react";
import Form from "./Form";
import './App.css';
import Clock from "./Clock/index.js";

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
        <div className="app">
            <Clock/>
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </div>
    );
}

export default App;
