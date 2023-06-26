import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from '../pages/home'
import Movies from '../pages/Movies'

const Drawer = createDrawerNavigator()

function Routes(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='Movies' component={Movies}/>
    </Drawer.Navigator>
  )
}

export default Routes