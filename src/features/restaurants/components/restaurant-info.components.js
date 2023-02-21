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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title style={styles.title}>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
