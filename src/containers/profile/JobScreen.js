import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class JobScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Job</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('city')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default JobScreen