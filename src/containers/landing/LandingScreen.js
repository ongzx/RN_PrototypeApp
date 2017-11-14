import React from 'react'
import { View, Text, TouchableOpacity, TextInput, LayoutAnimation } from 'react-native'

const LAYOUT_LINEAR_OPACITY = {
	duration: 200,
    create: {
		type: LayoutAnimation.Types.linear,
		property: LayoutAnimation.Properties.opacity,
    },
    update: {
		type: LayoutAnimation.Types.easeInEaseOut,
    },
};

class LandingScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        CURRENT_STATE: '',
        username: '',
        password: ''
    }

    componentWillUpdate() {
        LayoutAnimation.configureNext(LAYOUT_LINEAR_OPACITY);
    }

    triggerState = (state) => {
        this.setState({CURRENT_STATE: state})
    }

    renderFieldInput = () => {
        if (!this.state.CURRENT_STATE) {
            return null;
        }

        return (
            <View style={{height: 130, justifyContent:'center', alignItems:'stretch'}}>
                <TextInput 
                    multiline = {false}
                    style={{flex:1, height: 60, borderColor: 'gray', borderWidth: 1, textAlign:'center', marginBottom: 5}}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                    placeholderTextColor="#aaa"
                    placeholder="Username"/>
                <TextInput 
                    multiline = {false}
                    style={{flex:1, height: 60, borderColor: 'gray', borderWidth: 1, textAlign:'center', marginBottom: 5}}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    placeholderTextColor="#aaa"
                    secureTextEntry={true}
                    placeholder="Password"/>
            </View>
        )
    }

    go = () => {
        alert("Aloha: "+ this.state.CURRENT_STATE)
    }

    renderButton = () => {
        if (!this.state.CURRENT_STATE) {
            return (
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <TouchableOpacity 
                        style={{flex: 1, height: 50, backgroundColor:"#ccc", justifyContent:'center', alignItems:'center', marginRight: 5}}
                        onPress={() => { this.triggerState('Sign In') } }>
                        <Text>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flex: 1, height: 50, backgroundColor:"#ccc", justifyContent:'center', alignItems:'center',marginLeft: 5}}
                        onPress={() => { this.triggerState('Sign Up') }}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <TouchableOpacity 
                        style={{flex: 1, height: 50, backgroundColor:"#ccc", justifyContent:'center', alignItems:'center', marginRight: 5}}
                        onPress={() => { this.go() } }>
                        <Text>{this.state.CURRENT_STATE}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'stretch', flexDirection: 'column', padding: 20}}>
                <View style={{flex: 2, justifyContent:'center', alignItems:'stretch'}}>
                    <View style={{width: 200, height: 70, backgroundColor:'#ccc', alignSelf:'center'}} />
                </View>
                <View style={{flex: 1, justifyContent:'center', alignItems:'stretch', flexDirection: 'column'}}>
                    { this.renderFieldInput() }
                    { this.renderButton() }
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={{flex: 1, height: 50, backgroundColor:"#ccc", justifyContent:'center', alignItems:'center'}}
                            onPress={() => {alert("Sign up with Facebook")}}>
                            <Text>Sign In with Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        )
    }
}

export default LandingScreen