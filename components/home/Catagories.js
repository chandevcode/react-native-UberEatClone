import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

export default function Catagories() {

    const items = [
        {
            image: require("../../assets/images/shopping-bag.png"),
            text: "Pick-up",
          },
          {
            image: require("../../assets/images/soft-drink.png"),
            text: "Soft Drinks",
          },
          {
            image: require("../../assets/images/bread.png"),
            text: "Bakery Items",
          },
          {
            image: require("../../assets/images/fast-food.png"),
            text: "Fast Foods",
          },
          {
            image: require("../../assets/images/deals.png"),
            text: "Deals",
          },
          {
            image: require("../../assets/images/coffee.png"),
            text: "Coffee & Tea",
          },
          {
            image: require("../../assets/images/desserts.png"),
            text: "Desserts",
          },
    ]
    return (
        <View style={{backgroundColor:'#fff', paddingLeft: 20, marginTop: 5,paddingVertical: 10}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) =>(
                    <View key={index} style={{marginRight: 30, alignItems: 'center'}}>
                        <Image source={item.image} style={{ width: 50, height: 40, resizeMode:'contain'}} />
                        <Text style={{fontSize: 15, fontWeight: '600'}}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
