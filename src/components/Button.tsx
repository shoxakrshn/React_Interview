import { PropsWithChildren } from 'react';

type PropsType = {
  clickHandler: () => void;
  disabled?: boolean;
};

const Button: React.FC<PropsWithChildren<PropsType>> = ({
  children,
  clickHandler,
  disabled = false,
}) => {
  return (
    <button onClick={clickHandler} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
