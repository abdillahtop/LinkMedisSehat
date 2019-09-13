import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../Screens/Login'
import Screen2 from '../Screens/Screen2'
import Screen3 from '../Screens/Screen3'
import Screen4 from '../Screens/Screen4'

const AppStack = createStackNavigator({
    Screen2: {
        screen: Screen2,
        navigationOptions: {
            header: null,
        }
    },
    Screen3: {
        screen: Screen3,
        navigationOptions: {
            header: null,
        }
    }
});


export default createAppContainer(createSwitchNavigator(
    {
        Login: Login,
        Home: AppStack,
        Screen4: Screen4
    },
    {
        initialRouteName: 'Login',
    }
));