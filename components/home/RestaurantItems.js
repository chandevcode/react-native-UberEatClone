import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Bali Food",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.2,
  },
];
export default function RestaurantItem({ restaurantData, navigation }) {
  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }}
        key={index}
        onPress={() => navigation.navigate('Detail',{
          name: restaurant.name,
          image: restaurant.image_url,
          price: restaurant.price,
          reviews: restaurant.review_count,
          rating: restaurant.rating,
          categories: restaurant.categories,
        })}
        >
          <View
            style={{ marginTop: 5, padding: 15, backgroundColor: "white" }}
            
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const RestaurantImage = ({ image }) => (
  <>
    <Image source={{ uri: image }} style={{ width: "100%", height: 150 }} />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 15 }}>
      <Icon name="hearto" size={20} color={"white"} />
    </TouchableOpacity>
  </>
);
const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      position: "relative",
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ color: "gray" }}>30-45 ~ Min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#212529",

        justifyContent: "center",
        alignItems: "center",
        padding: 6,

        borderRadius: 5,
      }}
    >
      <Text style={{ color: "white" }}>{rating} </Text>
    </View>
  </View>
);
