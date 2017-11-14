import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class GenderScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Gender</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('year')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default GenderScreen