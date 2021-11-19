import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, borderRadius: 10, backgroundColor:'white',  }}>
            <Icon name='home' text='Home' />
            <Icon name='search' text='Search' />
            <Icon name='shopping-bag' text='Grocery' />
            <Icon name='receipt' text='Order' />
            <Icon name='user' text='Account' />
        </View>
    )
}

const Icon = ({name, text}) => (
    <TouchableOpacity>
        <View style={{ paddingVertical: 6, alignItems:'center'}}>
        <FontAwesome name={name} size={25} />
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
)
