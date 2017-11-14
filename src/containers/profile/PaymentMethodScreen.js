import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class PaymentMethodScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Payment Method</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('paymentEmail')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default PaymentMethodScreen