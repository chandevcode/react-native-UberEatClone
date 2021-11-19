import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider } from "react-redux";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import configurestore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";

const store = configurestore();
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

export default function RootNavigation() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={RestaurantDetail} />
          <Stack.Screen name="Completed" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
