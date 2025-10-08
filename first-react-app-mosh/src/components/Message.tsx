import { produce } from 'immer';
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
  const [customer, setCustomer] = useState({
    name: 'basmo',
    address: {
      city: 'Mannhiem',
      zipcode: 67069,
    },
  });
  const chooseDrink = () => {
    setDrink({
      title: 'Tee',
      cost: 3,
    });
  };

  const SetNewCodeZip = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 67061 },
    });
  };
  const [person, setPerson] = useState({
    name: 'Alice',
    address: { city: 'Paris', zip: 12345 },
  });

  const updateCity = () => {
    setPerson(
      produce(person, (draft) => {
        draft.address.city = 'London';
      })
    );
  };

  count++;
  return (
    <>
      <div> message {count}</div>
      <br />
      <button onClick={chooseDrink}> change drink price</button>
      {drink.cost}
      <br /> <br />
      <button onClick={SetNewCodeZip}> change address Zipcode</button>
      {customer.address.zipcode}
      <br /> <br />
      <button onClick={updateCity}>Move to London</button> {person.name} lives
      in {person.address.city}.
    </>
  );
};

export default Message;
