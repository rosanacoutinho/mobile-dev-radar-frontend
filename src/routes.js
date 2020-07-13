import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title: 'DevRadaR'
            },
        }, 
        Profile: {
            screen: Profile,
            navigationOptions:{
                title: 'Perfil no GitHub'
            }
        },
    },{
        defaultNavigationOptions: {
            headerTintColor: '#33FF5E',
            headerBackTitleVisible: false,
            headerStyle:{
                backgroundColor: '#4B504C',


            },
        },
    })
);

export default Routes;


