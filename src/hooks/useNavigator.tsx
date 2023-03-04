import { useDispatch, useSelector } from 'react-redux';

const useNavigator = () => {
  const dispatch = useDispatch();
  const { total, current, next, last } = useSelector(
    (state: any) => state.app.navigator
  );

  const itemsToRender = () => {
    const model = (position: number) => ({ position });
    const limit = 6;

    let items = Array.from({ length: limit }, (_, index) => model(current));

    items = items.map((item, index) => {
      item.position += index;
      return item;
    });

    items.push(model(total));
    return items;
  };

  return {
    total,
    itemsToRender,
  };
};

export default useNavigator;
