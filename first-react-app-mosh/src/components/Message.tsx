import { useState } from 'react';

// interface Props {
//   OnChooseDrink: () => void;
// }
const [drink, setDrink] = useState({
  title: 'Tee',
  cost: 12,
});

const chooseDrink = () => {
  console.log({ drink });
};

const Message = () => {
  let count = 0;
  count++;
  return (
    <>
      <div onDoubleClick={chooseDrink}> message {count}</div>;
    </>
  );
};

export default Message;
