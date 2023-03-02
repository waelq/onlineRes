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
import { Favourite } from "../../../components/favourite/favourite";
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
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
    placeId
  } = restaurant;

  const RattingArray = () => {
    var elements = [];
    for (var i = 0; i < Math.round(rating); i++) {
      elements.push(<SvgXml key={i} width={20} height={20} xml={star} />);
    }
    return elements;
  };

  return (
    <CardRestaurant elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Favourite restaurant={restaurant} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Ratting>
            <RattingArray />
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
