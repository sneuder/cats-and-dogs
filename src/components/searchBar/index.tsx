import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const SearchBar = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search puppies"
      />
      <TouchableOpacity>
        <Text style={styles.textButton}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  textButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
  },
});

export default SearchBar;
