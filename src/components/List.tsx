import { useAppSelector } from '../store/hooks';
import { selectCart } from '../store/store';
import Item from './Item';

const List: React.FC = () => {
  const { data: items, total } = useAppSelector(selectCart);

  return (
    <>
      <ul>
        {items.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </ul>
      <p>{total > 0 ? `${total} items in stock` : 'Stock is empty!'}</p>
    </>
  );
};

export default List;
