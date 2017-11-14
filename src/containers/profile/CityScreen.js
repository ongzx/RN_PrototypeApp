import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class CityScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>City</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('income')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CityScreen