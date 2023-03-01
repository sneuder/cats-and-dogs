import { View, StyleSheet } from 'react-native';

const Separator = () => {
  return <View style={style.separator}></View>;
};

const style = StyleSheet.create({
  separator: {
    height: 20,
  },
});

export default Separator;
