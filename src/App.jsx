import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";


function App() {

  const [InvestmentResults, setInvestmentResults] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 12,
  });

  function onResult(value, newValue) {
    return setInvestmentResults(prevResult => ({
      ...prevResult,
      [value]: +newValue,
    }));
  }

  return (
    <>
      <UserInput onResult={onResult} InvestmentResults={InvestmentResults} />
      <Result InvestmentResults={InvestmentResults} />
    </>
  )
}

export default App;
