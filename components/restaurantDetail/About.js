import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function About(props) {

  const { name, image, price, reviews, rating,categories} = props.route.params

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View style={styles.container}>
      <RestaurantImage image={image} />
      <RestauranName name={name} />
      <RestaurantDescription description={description}/>
    </View>
  );
}

const RestaurantImage = (props) => (
  <View>
    <Image
      source={{
        uri: props.image,
      }}
      style={styles.image}
    />
  </View>
);

const RestauranName = (props) => (
  <View style={styles.name}>
    <Text style={styles.nameText}> {props.name} </Text>
  </View>
);

const RestaurantDescription = (props) => (
  <View style={styles.desc}>
    <Text> {props.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
  name: {
      margin: 5
  },
  desc:{margin: 5},
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
