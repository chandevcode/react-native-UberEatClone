import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabs from "../components/home/BottomTabs";
import Catagories from "../components/home/Catagories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItem, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import ViewCart from "../components/restaurantDetail/ViewCart";

const YELP_API_KEY =
  "J3a04xK7i7570FeeSv2NFdVSwVrd1OZAp_YkO8Mppp2BjN-4g3Y97mIyIVIByYMQghcIqHs8QgR0dYxFHMi3DoZeSxOpDw1ImxWTxhCHsCTvbXW277kFPlM1TDaTYXYx";

export default function Home({navigation}) {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("New York");

  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses.filter((business) =>(
        business.transactions.includes(activeTab.toLocaleLowerCase())
      ))));
  };
  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catagories />
        <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1}/>
      
      <BottomTabs />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  top: {
    backgroundColor: "white",
    padding: 15,
  },
});
