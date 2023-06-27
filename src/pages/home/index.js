import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
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
import api, { key } from '../../service/api'
import { getListMovies } from '../../utils/movies'

function Home() {
  const [nowMovies, setNowMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    isActive = true;
  
    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          },
        }),
        api.get('/movie/popular', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          },
        }),
        api.get('/movie/top_rated', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          },
        }),
      ]);
  
      setNowMovies(getListMovies(10, nowData.data.results));
      setPopularMovies(getListMovies(5, popularData.data.results));
      setTopRatedMovies(getListMovies(5, topData.data.results));
    }
  
    getMovies();
  }, []);

  return (
    <Container>
      <Header title={"Muteka Movies"}/>
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
          data={nowMovies}
          renderItem={({ item }) => <SliderItem data={item}/>}
          keyExtractor={(item) =>  String(item?.id)}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={({ item }) => <SliderItem data={item}/>}
          keyExtractor={(item) =>  String(item?.id)}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topRatedMovies}
          renderItem={({ item }) => <SliderItem data={item}/>}
          keyExtractor={(item) =>  String(item?.id)}
        />
      </ScrollView>
    </Container>
  )
}


export default Home 