import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class CompletionScreen extends React.Component {

    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Thank you</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CompletionScreen