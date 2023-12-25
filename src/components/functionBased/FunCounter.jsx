import React, { useState } from 'react'

const FunCounter = () => {
  // let countValue = 0;
  const [countValue, setCountValue] = useState(0)

  const inCrement = () => {
    // countValue = countValue + 1
    setCountValue(countValue + 1)
  }

  const deCrement = () => {
    // countValue = countValue - 1
    if (countValue > 0) {
      setCountValue(countValue - 1)
    }
  }

  return (
    <>
      <div>
        Count {countValue}
      </div>
      <br />
      <button onClick={inCrement}>+</button>
      <button onClick={deCrement}>-</button>
    </>
  );
};

export default FunCounter;
