import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const MainScreen = () => (
    <View style={styles.container}>
        <View style={{flex: 3}}/>
        <View style={styles.topicHeader}>
            <View style={{width: 100, height: 100, backgroundColor:'#ff0000'}} />
            <Text style={styles.topicTitle}>Title</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent:'center', alignContent:'center'}}>
            <Text style={styles.topicDesc}>
                Hello world
            </Text>
            <TouchableOpacity
                style={styles.startBtn}
                onPress={()=>{alert("Start")}}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        backgroundColor: '#f5fcff',
        padding: 20,
        flexDirection: 'column'
    },
    topicHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    topicTitle: {
        padding: 10,
        color: '#000'
    },
    topicDesc: {
        color: '#000',
        paddingVertical: 10,
        flex:1
    },
    startBtn: {
        height: 35,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

MainScreen.navigationOptions = {
    title: 'Main',
    header: null
}

export default MainScreen