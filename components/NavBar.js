import SplitScreen from '../screens/SplitScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/color';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default Home = () =>{

return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Max Reps') {
            iconName = focused ? 'md-bar-chart' : 'md-bar-chart-outline';
        } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
        }
        else if (route.name === 'Splits') {
            iconName = focused ? 'barbell' : 'barbell-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: color.primary,
    tabBarInactiveTintColor: 'gray',
    })}
    >
    <Tab.Screen name="Max Reps" component={WorkoutScreen}/>
    <Tab.Screen name="Splits" component={SplitScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
);
}