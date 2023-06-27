import React from "react";
import { Container, BannerItem, Title, RateContainer, Rate } from "./style";
import { Ionicons } from "@expo/vector-icons"

function SliderItem({ data }){
  return(
    <Container activeOpacity={0.7}>
          <BannerItem
            source={{ uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`}}
          />
          <Title numberOfLines={1}>{data?.ttle}</Title>
          <RateContainer>
              {/* <Ionicons name="md-start" size={12} color={"#E7A74E"}/> */}
              <Rate>
                {data?.vote_average}/10 
              </Rate>
          </RateContainer>
    </Container>
    )
}

export default SliderItem 



