import { DataType } from '../data';
import { changeAmount } from '../store/cart.slice';
import { useAppDispatch } from '../store/hooks';
import Button from './Button';

type PropsType = {
  data: DataType;
};

const Item: React.FC<PropsType> = ({ data }) => {
  const dispatch = useAppDispatch();

  const onIncreaseHandler = () => {
    dispatch(changeAmount({ id: data.id, updateValue: 1 }));
  };

  const onDecreaseHandler = () => {
    dispatch(changeAmount({ id: data.id, updateValue: -1 }));
  };

  return (
    <li className="flex gap-4 mb-4 items-center">
      <Button clickHandler={onDecreaseHandler} disabled={data.amount === 0}>
        -
      </Button>
      <span>{data.amount}</span>
      <Button clickHandler={onIncreaseHandler}>+</Button>
      <span>{`${data.type} - ${data.color}`}</span>
    </li>
  );
};

export default Item;
