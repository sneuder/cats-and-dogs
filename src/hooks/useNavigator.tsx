import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigationDetails } from '../state/slices/app';
import { splitLengthIntoPages } from '../services/format';

const useNavigator = () => {
  const dispatch = useDispatch();

  const pets = useSelector((state: any) => state.pet.pets);
  const { navigator, petType } = useSelector((state: any) => state.app);
  const { total, current } = navigator;

  const itemsToRender = () => {
    const positionModel = (position: number) => ({ position });
    const limitItmes = 6;

    let items = Array.from({ length: limitItmes }, () => {
      if (current - 1 < 1) return positionModel(current);
      return positionModel(current - 1);
    });

    items = items.reduce(
      (prevItems, currentItem) => {
        const prevItem = prevItems[prevItems.length - 1];
        const numberPage = prevItem.position;

        if (numberPage >= total - 1) {
          if (prevItems[0].position - 1 <= 1) return prevItems;
          prevItems.unshift(positionModel(prevItems[0].position - 1));
          return prevItems;
        }

        currentItem = { ...currentItem };
        currentItem.position = numberPage + 1;

        if (prevItem.position === 1) prevItems = [];

        const pages = [...prevItems, currentItem];
        if (currentItem.position === total) pages.pop();

        return pages;
      },
      [items[0]]
    );

    items.push(positionModel(total));
    items.unshift(positionModel(1));

    return items;
  };

  const handleChangePage = (numberPage: number) => {
    dispatch(navigationDetails(['current', numberPage]));
  };

  const handleTotalPage = () => {
    const pages = splitLengthIntoPages(pets[petType].length, 10);
    dispatch(navigationDetails(['total', pages]));
  };

  useEffect(() => {
    handleTotalPage();
  }, [pets[petType]]);

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
