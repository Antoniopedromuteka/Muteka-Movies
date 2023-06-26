import React from "react";
import {View, Text} from "react-native"
import * as C from "./styles"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"


function Header({ title }){
  const navigate = useNavigation()
  return(
      <C.Container>
        <C.MenuButton onPress={() => navigate.openDrawer()}>
          <Feather name="menu" size={36} color={"#fff"}/>
        </C.MenuButton>
        <C.Title>{title}</C.Title>
      </C.Container>
    )
}

export { Header }