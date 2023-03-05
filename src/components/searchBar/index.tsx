import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import useDogs from '../../hooks/usePet';
import styles from './styles';

const SearchBar = () => {
  // const { handleSearchDogs, handleSaveSearch } = useDogs();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search puppies"
        // onChangeText={handleSaveSearch}
      />
      <TouchableOpacity
        style={styles.containerButton}
        // onPress={handleSearchDogs}
      >
        <Text style={styles.textButton}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
