// import './global.css';

// import 'react-native-gesture-handler';

// import RootStack from './navigation';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();
// export default function App() {
//   return<RootStack/>
// }
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/one';
import product from './screens/ProductDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="product" component={product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import CategoryScreen from './screens/two';
// import Rings from './screens/Rings';
// import Necklace from './screens/Necklace';
// import Earings from 'screens/Earings';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
//         <Stack.Screen name="Rings" component={Rings} />
//         <Stack.Screen name="Necklace" component={Necklace} />
//         <Stack.Screen name="Earings" component={Earings} />
//         {/* <Stack.Screen name="Rings" component={Rings} /> */}
//         {/* <Stack.Screen name="Rings" component={Rings} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Brands from './screens/Brands';
// import ProductScreen from './screens/products';

// const Stack = createStackNavigator();

// export default function RootStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Brands" component={Brands} />
//         <Stack.Screen name="ProductScreen" component={ProductScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
