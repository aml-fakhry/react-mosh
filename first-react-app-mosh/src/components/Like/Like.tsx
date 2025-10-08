import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

interface Props {
  OnClick: () => void;
}
const Like = ({ OnClick }: Props) => {
  const [status, SetStatus] = useState(false);
  const toggle = () => {
    SetStatus(!status);
    OnClick();
  };
  return (
    <div>
      {!!status ? (
        <FaHeart size='60' color='#ff6b81' onClick={toggle} />
      ) : (
        <CiHeart size='60' color='#ff6b81' onClick={toggle} />
      )}
    </div>
  );
};

export default Like;
