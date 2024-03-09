
export default function UserInput({ onResult, InvestmentResults }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" id="initial-investment" required
                        defaultValue={InvestmentResults.initialInvestment}
                        onChange={(e) => onResult('initialInvestment', e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id="annual-investment" required
                        defaultValue={InvestmentResults.annualInvestment}
                        onChange={(e) => onResult('annualInvestment', e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" id="expected-return" required
                        defaultValue={InvestmentResults.expectedReturn}
                        onChange={(e) => onResult('expectedReturn', e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" required
                        defaultValue={InvestmentResults.duration}
                        onChange={(e) => onResult('duration', e.target.value)}
                    />
                </p>
            </div>
        </section >
    );
}