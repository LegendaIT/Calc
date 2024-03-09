import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result({ InvestmentResults }) {

    const investment = calculateInvestmentResults(InvestmentResults);
    const initialInvestment = investment[0].valueEndOfYear - investment[0].interest - investment[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investmant Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investment.map(result => {
                    const totalInterst = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear - totalInterst;

                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterst)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}