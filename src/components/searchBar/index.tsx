import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import useDogs from '../../hooks/useDogs';

const SearchBar = () => {
  const { handleSearchDogs, handleSaveSearch } = useDogs();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search puppies"
        onChangeText={handleSaveSearch}
      />
      <TouchableOpacity
        style={styles.containerButton}
        onPress={handleSearchDogs}
      >
        <Text style={styles.textButton}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRightWidth: 0,
    padding: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textButton: {
    textAlign: 'center',
  },
  containerButton: {
    alignContent: 'center',
    padding: 10,
    backgroundColor: 'red',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default SearchBar;
