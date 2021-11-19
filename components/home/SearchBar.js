import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconAnt from "react-native-vector-icons/AntDesign";

export default function SearchBar({cityHandler}) {
  return (
    <View style={{ flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyAEPA2RLNs3YxYFm1Sdqkn_oKQIAiC-WAk'}}
        onPress={(data, details=null) => {
          console.log(data.description)
          const city = data.description.split(',')[0]
          cityHandler(city)
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            marginTop: 8,
            borderRadius: 20,
            fontWeight: "700",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            marginTop: 8,
            flexDirection: "row",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10, justifyContent: "center" }}>
            <Icon name="place" color={"black"} size={25} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 8,
              backgroundColor: "white",
              marginVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 20,
            }}
          >
            <IconAnt name="clockcircle" size={12} style={{ marginRight: 5 }} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
