import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hometab from "./src/navigation/Hometab";
import List_book from "./src/screens/List_book";
import SplashScreen from "react-native-splash-screen";
import Longinwgg from "./src/screens/Loginwgg";
import Detail from "./src/screens/Detail";
import Category from "./src/screens/Category";
import Newbook from "./src/screens/Newbook";
import Newbookup from "./src/screens/Newbookup";
import Viewmore from "./src/screens/Viewmore";
import Viewmorefl from "./src/screens/Viewmorefl";
import Login from "./src/screens/Login";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";





const Stack = createNativeStackNavigator();

const App = () =>
{


  useEffect( () =>
  {
    SplashScreen.hide();
  }, [] )
  return (

    <>

      <NavigationContainer >
        <Stack.Navigator screenOptions={ { headerShown: false } } >
          <Stack.Screen name="Hometab" component={ Hometab } />
          <Stack.Screen name="Listcate" component={ List_book } />
          <Stack.Screen name="Login" component={ Longinwgg } />
          <Stack.Screen name="Detail" component={ Detail } />
          <Stack.Screen name="Category" component={ Category } />
          <Stack.Screen name="Newbook" component={ Newbook } />
          <Stack.Screen name="Newbookup" component={ Newbookup } />
          <Stack.Screen name="Viewmore" component={ Viewmore } />
          <Stack.Screen name="Viewmorefl" component={ Viewmorefl } />
          <Stack.Screen name="Signin" component={ Signin } />
          <Stack.Screen name="Signup" component={ Signup } />
        </Stack.Navigator>
      </NavigationContainer>



    </>
  );
}
export default App;
