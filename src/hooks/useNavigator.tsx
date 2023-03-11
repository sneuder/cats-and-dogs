import { RootState } from '../state';
import PetType from '../interfaces/PetType';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigationDetails } from '../state/slices/app';

import { splitLengthIntoPages, createArray } from '../services/format';

const useNavigator = (petType: PetType) => {
  const dispatch = useDispatch();

  const { pets, amount } = useSelector((state: RootState) => state.pet);
  const { navigator } = useSelector((state: RootState) => state.app);
  const { total, current } = navigator;

  const itemsToRender = () => {
    const positionModel = (position: number) => ({ position });
    let items = createArray(6, current);

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

        const pages = [...prevItems, currentItem];

        if (prevItem.position === 1) pages.shift();
        if (currentItem.position === total) pages.pop();

        return pages;
      },
      [items[0]]
    );

    items.unshift(positionModel(1));
    items.push(positionModel(total));

    return items;
  };

  const handleChangePage = (numberPage: number) => {
    dispatch(navigationDetails(['current', numberPage]));
  };

  const handleTotalPage = () => {
    const pages = splitLengthIntoPages(amount, 10);
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
