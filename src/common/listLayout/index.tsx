import { View } from 'react-native';
import Separator from '../separator';

const ListLayout = ({ children, collection, index }) => {
  return (
    <View>
      {children}
      {index !== collection.length - 1 && <Separator />}
    </View>
  );
};

export default ListLayout;
