import { View, Text } from 'react-native'
import React from 'react'
import { Container, SearchButton, SearchContainer, Input } from './styles'
import { Header } from '../../components/Header'
import { Feather } from "@expo/vector-icons"

function Home() {
  return (
     <Container>
      <Header title={"React Prime"}/>
      <SearchContainer>
        <Input
          placeholder="Ex vingadores.."
          placeholderTextColor={"#ddd"}
        />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>
     </Container>
  )
}


export default Home 