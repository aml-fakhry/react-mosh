import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import ListGroupStyle from './components/list-Group/listGroupStyle';
import Like from './components/Like/Like';
import Message from './components/Message';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', ' Cairo', 'Qena'];

  const [products, setProducts] = useState(['Laptop', 'Phone', 'Headphones']);
  const handelSelectItem = (item: string) => {
    console.log({ item });
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <Like OnClick={() => console.log('clicked')} />
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handelSelectItem}
      />
      {alertVisible && (
        <Alert
          text=' A simple info alert—check it out!'
          onClose={() => setAlertVisible(false)}
        >
          <p>from children</p>
        </Alert>
      )}
      <Button
        label='Click :)'
        onClick={() => {
          setAlertVisible(true);
        }}
        color='success'
      />
      <ListGroupStyle></ListGroupStyle>
      <Message />{' '}
      <div className='nav'>
        Navbar
        <Navbar setProductCount={products.length}></Navbar>
      </div>
      <Cart cartProducts={products} onClear={() => setProducts([])}></Cart>
    </div>
  );
}

export default App;
