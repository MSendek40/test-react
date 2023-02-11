import Form from "./Form";
import Clock from "./Clock/index.js";
import { AppStyle } from "./styled.js";

function App() {

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
