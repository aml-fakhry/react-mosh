import { useState } from 'react';

// interface Props {
//   OnChooseDrink: () => void;
// }

const Message = () => {
  let count = 0;
  const [drink, setDrink] = useState({
    title: 'Tee',
    cost: 12,
  });
  const chooseDrink = () => {
    setDrink({
      title: 'Tee',
      cost: 3,
    });
  };

  count++;
  return (
    <>
      <div> message {count}</div>
      <button onClick={chooseDrink}> click</button>
      {drink.cost}
    </>
  );
};

export default Message;
