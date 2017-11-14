import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class PaymentEmailScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Payment Email</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('complete')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default PaymentEmailScreen