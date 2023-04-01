import { useState } from 'react';

const Calculator = () => {
    const [amount, setAmount] = useState(250);
    const [duration, setDuration] = useState(1);

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        const rate = calculateRate(value, duration);
        setAmount(value);
        setRate(rate);
    };

    const handleDurationChange = (e) => {
        const value = parseInt(e.target.value);
        const rate = calculateRate(amount, value);
        setDuration(value);
        setRate(rate);
    };

    const calculateRate = (amount, duration) => {
        const rate = amount * 0.85 * duration + amount;
        return rate.toFixed(2);
    };

    const [rate, setRate] = useState(calculateRate(amount, duration));

    return (
        <div className="calculator">
            <h2>Loan Calculator</h2>
            <form>
                <label>
                    Amount: ${amount}
                    <input
                        type="range"
                        min="250"
                        max="1000"
                        step="50"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </label>
                <br />
                <label>
                    Duration: {duration} days
                    <input
                        type="range"
                        min="1"
                        max="61"
                        step='2'
                        value={duration}
                        onChange={handleDurationChange}
                    />
                </label>
            </form>
            <p>Rate: ${rate}</p>
        </div>
    );
};

export default Calculator;
