import { View, Text } from 'react-native'
import React from 'react'
import { 
  Container, 
  SearchButton, 
  SearchContainer, 
  Input, 
  Title, 
  BannerButton, 
  Banner,
  SliderMovie
} from './styles'
import { Header } from '../../components/Header'
import { Feather } from "@expo/vector-icons"
import { ScrollView } from "react-native"
import SliderItem from '../../components/SlideItem'

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em Cartaz</Title>
        <BannerButton activeOpacity={0.9} onPress={() => alert("hello")}>
          <Banner
            resizeMethod='resize'
            source={{ uri: 'https://images.unsplash.com/photo-1545630478-cf62cdd247d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'}}
          />
        </BannerButton>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem/>}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem/>}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem/>}
        />
      </ScrollView>
    </Container>
  )
}


export default Home 