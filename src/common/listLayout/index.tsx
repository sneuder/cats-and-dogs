import { Fragment } from 'react';
import Separator from '../separator';

const ListLayout = ({ children, collection, index }) => {
  return (
    <Fragment>
      {children}
      {index !== collection.length - 1 && <Separator />}
    </Fragment>
  );
};

export default ListLayout;
