import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class YearScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Year</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('job')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default YearScreen