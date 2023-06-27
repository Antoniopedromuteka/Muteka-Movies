import React from "react";
import { Container, BannerItem, Title, RateContainer, Rate } from "./style";
import { Ionicons } from "@expo/vector-icons"

function SliderItem(){
  return(
    <Container activeOpacity={0.7}>
          <BannerItem
            source={{ uri: 'https://images.unsplash.com/photo-1545630478-cf62cdd247d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'}}
          />
          <Title numberOfLines={1}>Vingadores Vingadores Vingadores</Title>
          <RateContainer>
              <Ionicons name="md-start" size={12} color={"#E7A74E"}/>
              <Rate>
                9/10
              </Rate>
          </RateContainer>
    </Container>
    )
}

export default SliderItem 



