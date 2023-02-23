import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View
  // Platform,
} from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";
const CardRestaurant = styled(Card)`
  background-color: white;
`;
const CardCover = styled(Card.Cover)`
  background-color: red;
  padding: 20px;
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[1]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

// color: ${(props) => props.theme.colors.ui.error}; is how to get them from theme provider

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "test",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "Tell-Al-Soltan",
    isOpenNow = true,
    rating = 4,
    isClosed
  } = restaurant;
  return (
    <CardRestaurant elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </CardRestaurant>
  );
};

const styles = StyleSheet.create({});
