import {useState} from "react";

export default function UserInput({onChange, userInput}) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>초기 자본</label>
                <input type="number" required
                       value={userInput.initialInvestment}
                       onChange={event =>
                           onChange("initialInvestment", event.target.value)}
                />
            </p>
            <p>
                <label>연간 투자금</label>
                <input type="number" required
                       value={userInput.annualInvestment}
                       onChange={event =>
                           onChange("annualInvestment", event.target.value)}
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>기대 수익률</label>
                <input type="number" required
                       value={userInput.expectedReturn}
                       onChange={event =>
                           onChange("expectedReturn", event.target.value)}
                />
            </p>
            <p>
                <label>기간</label>
                <input type="number" required
                       value={userInput.duration}
                       onChange={event =>
                           onChange("duration", event.target.value)}
                />
            </p>
        </div>
    </section>
};