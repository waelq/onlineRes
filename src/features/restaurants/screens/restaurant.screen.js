import React, { useContext, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity
  // Platform,
} from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
import styled from "styled-components";
// const isAndroid = Platform.OS ==="android"
// import Component
import { Search } from "../components/search";
import { SafeArea } from "../../../components/saveArea/saveArea.component";
import { FavouriteBar } from "../../../components/favourite/favourite-bar";
import { FadeInView } from "../../../components/animation/fade.animation";
// import context
import { RestaurantsContext } from "../../../services/restaurants/resturants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 }
})``;
// arrts is how controle style in attrubute

const Loading = styled(ActivityIndicator)`
  marginleft: -25px;
`;
const LoadingContainer = styled.View`
  align-items: center;
  justify-content: center;
  top: 40%;
  position: "absolute";
`;
export const RestaurnatsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggle, setIsToggle] = useState(false);
  return (
    <SafeArea>
      <Search
        isFavouriteToggle={isToggle}
        isToggleFuncion={() => setIsToggle(!isToggle)}
      />
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue400} />
        </LoadingContainer>
      )}
      {isToggle && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

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
              <FadeInView>
                <RestaurantInfo restaurant={item} />
              </FadeInView>
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
