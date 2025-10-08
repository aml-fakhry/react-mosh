interface Props {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color = 'primary', onClick }: Props) => {
  return (
    <>
      <button type='button' className={'btn btn-' + color} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
