import React, { useContext } from "react";
import {
  StyleSheet,
  FlatList,
  View
  // Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
import styled from "styled-components";
// const isAndroid = Platform.OS ==="android"
// import Component
import { SafeArea } from "../../../components/saveArea/saveArea.component";
// import context
import { RestaurantsContext } from "../../../services/restaurants/resturants.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 }
})``;
// arrts is how controle style in attrubute
export const RestaurnatsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  // console.log(restaurantsContext);
  return (
    <SafeArea>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <RestaurantList
        data={restaurants}
        // {item} prop in reachout item prop in object
        renderItem={({ item }) => {
          // console.log({ item });
          return <RestaurantInfo restaurant={item} />;
        }}
        keyExtractor={(item, index) => item.name}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16
    // backgroundColor: "green",
  }
});
