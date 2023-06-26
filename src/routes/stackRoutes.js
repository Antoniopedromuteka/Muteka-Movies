import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../pages/home";
import Movies from "../pages/Movies";


const Stack = createNativeStackNavigator();


function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      {/* <Stack.Screen name="Movies" component={Movies}/> */}
    </Stack.Navigator>
  )
}

export default StackRoutes;
