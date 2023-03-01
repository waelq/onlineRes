import React, { useContext } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity
  // Platform,
} from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
import styled from "styled-components";
// const isAndroid = Platform.OS ==="android"
// import Component
import { Search } from "../components/search";
import { SafeArea } from "../../../components/saveArea/saveArea.component";
// import context
import { RestaurantsContext } from "../../../services/restaurants/resturants.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 }
})``;
// arrts is how controle style in attrubute

const Loading = styled(ActivityIndicator)`
  marginleft: -25;
`;
const LoadingContainer = styled.View`
  top: 50%;
  left: 50%;
  position: "absolute";
`;
export const RestaurnatsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  // console.log(restaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <View style={{ top: "50%", left: "50%", position: "absolute" }}>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            color={({ props }) => props.theme.colors.brand.secondary}
          />
        </View>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        // {item} prop in reachout item prop in object
        renderItem={({ item }) => {
          // console.log({ item });
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          );
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
