import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, DrawerNavigator, SafeAreaView } from 'react-navigation'
import LandingScreen from '../containers/landing/LandingScreen'
import GenderScreen from '../containers/profile/GenderScreen'
import YearScreen from '../containers/profile/YearScreen'
import JobScreen from '../containers/profile/JobScreen'
import CityScreen from '../containers/profile/CityScreen'
import IncomeScreen from '../containers/profile/IncomeScreen'
import FoodConsumptionScreen from '../containers/profile/FoodConsumptionScreen'
import PaymentMethodScreen from '../containers/profile/PaymentMethodScreen'
import PaymentEmailScreen from '../containers/profile/PaymentEmailScreen'
import CompletionScreen from '../containers/profile/CompletionScreen'
import MissionsScreen from '../containers/main/MissionsScreen'
import MissionDetailScreen from '../containers/main/MissionDetailScreen'

import MenuButton from '../components/MenuButton'

const ProfileStack = StackNavigator({
    gender: { screen: GenderScreen },
    year: { screen: YearScreen },
    job: { screen: JobScreen },
    city: { screen: CityScreen },
    income: { screen: IncomeScreen },
    foodConsumption: { screen: FoodConsumptionScreen },
    paymentMethod: { screen: PaymentMethodScreen },
    paymentEmail: { screen: PaymentEmailScreen },
    complete: { screen: CompletionScreen }
}, {
    headerMode: 'none'
})

const MainStack = StackNavigator({
    missions: {screen: MissionsScreen},
    missionDetail: { screen: MissionDetailScreen }
}, {
    headerMode: 'none'
})

export const AppNavigator = StackNavigator({
    Landing: { screen: LandingScreen },
    Profile: { screen: ProfileStack },
    Main: { screen: MainStack },
    
},{
    navigationOptions: ({navigation}) => ({
        headerTitle: <View style={{width: 100, height: 30, backgroundColor:"#ccc"}} />,
        headerLeft: <MenuButton navigate={navigation.navigate} />,
        headerTitleStyle:{
            textAlign: 'center',
            alignSelf:'center'
        }
    })
})

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)