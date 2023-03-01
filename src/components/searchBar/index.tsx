import { StyleSheet, View, TextInput } from 'react-native';

const SearchBar = () => {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;
