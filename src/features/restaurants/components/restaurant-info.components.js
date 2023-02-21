import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  // Platform,
} from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "test",
    icon,
    photos = ["https://picsum.photos/700"],
    address,
    isOpenNow = true,
    rating = 4,
    isClosed,
  } = restaurant;
  return (
    <CardRestaurant elevation={5}>
      <Card.Cover resizeMode="contain" key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </CardRestaurant>
  );
};

const styles = StyleSheet.create({});
