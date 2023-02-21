import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  // Platform,
} from "react-native";
import { Card } from "react-native-paper";
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name ="test",
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
      <Text style={styles.title}>{name}</Text>
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
  title:{
    padding:16,
  }
});
