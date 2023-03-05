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
      if (current - 1 < 1) return model(current);
      return model(current - 1);
    });

    items = items.reduce(
      (prevItems, currentItem) => {
        const prevItem = prevItems[prevItems.length - 1];
        const numberPage = prevItem.position;

        if (numberPage >= total) {
          prevItems.unshift(model(prevItems[0].position - 1));
          return prevItems;
        }

        currentItem = { ...currentItem };
        currentItem.position = numberPage + 1;

        const pages = [...prevItems, currentItem];
        return pages;
      },
      [items[0]]
    );

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
