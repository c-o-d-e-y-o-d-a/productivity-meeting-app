import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Search Text:', searchText);
  };

  return (
    <View>
      {/* Simple Search Bar */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Type your search here"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {/* Search Bar from react-native-elements */}
      {/* <SearchBar
        placeholder="Type your search here"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        lightTheme
        round
      /> */}

      {/* Search Button */}
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchComponent;
