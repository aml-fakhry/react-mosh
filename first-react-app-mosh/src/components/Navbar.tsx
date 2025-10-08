import type { ReactNode } from 'react';

interface props {
  setProductCount: number;
  children?: ReactNode;
}

const Navbar = ({ setProductCount }: props) => {
  return <div>{setProductCount}</div>;
};

export default Navbar;
