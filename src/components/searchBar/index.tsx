import useSearch from '../../hooks/useSearch';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface SearchBarProps {
  eventSearch: () => void;
}

const SearchBar = ({ eventSearch }: SearchBarProps) => {
  const { handleSearch } = useSearch();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search pet"
        onChangeText={(text) => handleSearch(text)}
      />
      <TouchableOpacity
        style={styles.containerButton}
        onPress={eventSearch}
      >
        <Text style={styles.textButton}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
