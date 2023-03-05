import { useDispatch, useSelector } from 'react-redux';
import { navigationDetails } from '../state/slices/app';
import { useEffect } from 'react';

const useNavigator = () => {
  const dispatch = useDispatch();
  const { total, current, next, last } = useSelector(
    (state: any) => state.app.navigator
  );

  const itemsToRender = () => {
    const model = (position: number) => ({ position });
    const limit = 6;

    let items = Array.from({ length: limit }, (_, index) => {
      if (current - 2 < 1) return model(current);
      return model(current - 2);
    });

    items = items.map((item, index) => {
      item.position += index;
      return item;
    });

    // items = items.reduce((prevItem, currentItem) => {

    // }, [items[0]]);

    items.push(model(total));
    return items;
  };

  const handleChangePage = (numberPage: number) => {
    dispatch(navigationDetails(['current', numberPage]));
  };

  useEffect(() => {
    return () => {
      dispatch(navigationDetails(['current', 1]));
    };
  }, []);

  return {
    total,
    current,
    itemsToRender,
    handleChangePage,
  };
};

export default useNavigator;
