import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import { AppNavigator } from './navigator'

// import MainReducer from 'containers/main/MainReducer'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Landing'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default combineReducers({
    nav: navReducer,
    //main: MainReducer
})