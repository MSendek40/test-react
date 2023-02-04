import { ResultStyle } from "./styled";

const Result = ({ result }) => (
  <ResultStyle>
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
        {" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </ResultStyle>
);

export default Result