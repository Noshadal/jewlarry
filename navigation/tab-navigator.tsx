import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

import { RootStackParamList } from '.';
import { HeaderButton } from '../components/HeaderButton';
import One from '../screens/one';
import Two from '../screens/two';
import Bage from '../screens/Bage';
import Brands from '../screens/Brands';
import Profile from '../screens/Profile';
import ProductDetailScreen from 'screens/ProductDetail';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={One}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
          headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
        }}
      />
      <Tab.Screen
        name="Catageries"
        component={Two}
        options={{
          title: 'Catageries',
          tabBarIcon: ({ color }) => <Icon name="category" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Brands"
        component={Brands}
        options={{
          title: 'Brands',
          tabBarIcon: ({ color }) => <Icon name="storefront" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Bage"
        component={Bage}
        options={{
          title: 'Bage',
          tabBarIcon: ({ color }) => <Icon name="shopping-bag" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Icon name="person" size={24} color={color} />,
        }}
      />
      
    </Tab.Navigator>
  );
}
