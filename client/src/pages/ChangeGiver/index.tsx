import React, { useState } from "react";

const denominations = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

const moneyChanger = money => {
  return denominations.reduce((acc, int) => {
    const denominationChange = Math.floor(+money.toFixed(2) / int);
    acc[int] = denominationChange;
    money -= int * denominationChange;
    return acc;
  }, {});
};

const ChangeGiver = () => {
  const [number, setNumber] = useState(0);

  const change = moneyChanger(+number);

  return (
    <div className="App">
      <h2>Get the £'s and p's change from a given amount</h2>
      <h3>Denominations: £{denominations.join(", £")}</h3>
      <p>Enter a decimal number to see the smaller denominations change</p>
      <input
        style={{ width: "100px" }}
        type="number"
        max="20"
        min="1"
        value={+number}
        onChange={e => setNumber((e.target.value as unknown) as number)}
      />
      <p>Change amount: </p>
      <ul>
        {Object.entries(change).map((denomination, index) => (
          <li key={index}>{`£${denomination[0]}: ${denomination[1]}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChangeGiver;
