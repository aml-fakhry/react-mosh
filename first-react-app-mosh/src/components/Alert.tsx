import { type ReactNode } from 'react';

interface Props {
  text: string;
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ text, children, onClose }: Props) => {
  return (
    <>
      <div className='alert alert-info alert-dismissible' role='alert'>
        {text}
        {children}
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
          onClick={onClose}
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    </>
  );
};

export default Alert;
//rafc
