import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class IncomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Income</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('foodConsumption')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default IncomeScreen