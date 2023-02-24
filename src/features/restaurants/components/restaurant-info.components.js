import React from "react";
import {
  StyleSheet

  // Platform,
} from "react-native";
import { SvgXml } from "react-native-svg";
// import star
import star from "../../../../assets/stars";
import open from "../../../../assets/open";
// import component
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
// import styled
import {
  Icon,
  CardCover,
  CardRestaurant,
  Address,
  Info,
  Ratting,
  Section,
  SectionEnd,
  OpenSVG
} from "./restaurant-info.style";
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "test",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
    ],
    address = "Tell-Al-Soltan",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant;
  const rattingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <CardRestaurant elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Ratting>
            {rattingArray.map(() => (
              <SvgXml width={20} height={20} xml={star} />
            ))}
          </Ratting>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="caption">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <OpenSVG xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </CardRestaurant>
  );
};
