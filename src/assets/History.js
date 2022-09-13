import React, { useState, useEffect } from "react";

export default function History (props) {
const { hist } = props;
const [numbers, setNumbers] = useState([]);
const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (hist !== '') {
      setNumbers(numbers => [...numbers, hist]);
      setCounter(counter + 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hist]);

  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  return(
    <div>
      <p>History</p>
      <ul>{listItems}</ul>
    </div>
    )
}


