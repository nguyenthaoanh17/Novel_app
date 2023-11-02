import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home_screen from '../screens/Home_screen';
import Category from '../screens/Category';
import Search_book from '../screens/Search_book';
import Books_offline from '../screens/Books_offline';
import Menu from '../screens/Menu';
const Tab = createBottomTabNavigator();
const Hometab = () =>
{
    return (

        <Tab.Navigator
            screenOptions={ ( { route } ) => ( {
                tabBarIcon: ( { focused, color, size } ) =>
                {
                    let iconName: any;


                    if ( route.name === 'Home' )
                    {
                        iconName = focused
                            ? 'compass-outline'
                            : 'compass-outline';

                    } else if ( route.name === 'Category' )
                    {
                        iconName = focused ? 'dots-grid' : 'dots-grid';
                    } else if ( route.name === 'Search' )
                    {
                        iconName = focused
                            ? 'magnify'
                            : 'magnify';
                    } else if ( route.name === 'Offline' )
                    {
                        iconName = focused
                            ? 'cards-heart-outline'
                            : 'cards-heart-outline';
                    } else if ( route.name === 'Menu' )
                    {
                        iconName = focused
                            ? 'dots-horizontal'
                            : 'dots-horizontal';
                    }


                    // You can return any component that you like here!
                    return <Icon name={ iconName } size={ 30 } color={ color } />;


                },
                tabBarActiveTintColor: '#00BFFF',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                // tabBarStyle: {
                //     borderRadius: 20,
                //     height: 50,
                //     top: -10,

                // }

            } ) }
        >
            <Tab.Screen name="Home" component={ Home_screen } options={ { headerShown: false } } />
            <Tab.Screen name="Category" component={ Category } options={ { headerShown: false } } />

            <Tab.Screen name="Search" component={ Search_book } options={ { headerShown: false } } />
            <Tab.Screen name="Offline" component={ Books_offline } options={ { headerShown: false } } />
            <Tab.Screen name="Menu" component={ Menu } options={ { headerShown: false } } />

        </Tab.Navigator>

    )
}
export default Hometab;