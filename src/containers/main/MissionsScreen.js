import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class MissionsScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Missions </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('missionDetail')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default MissionsScreen