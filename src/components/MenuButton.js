import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class MenuButton extends React.Component {

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.props.navigate('DrawerOpen')} }>
                    <Icon name="bars" style={{color: '#000', padding: 10, marginLeft:10, fontSize: 20}}/>
                </TouchableOpacity>
            </View>
        )
    }
	
}

export default MenuButton;