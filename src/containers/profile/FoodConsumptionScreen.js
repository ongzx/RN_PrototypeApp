import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class FoodConsumptionScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Food Consumption</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('paymentMethod')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default FoodConsumptionScreen