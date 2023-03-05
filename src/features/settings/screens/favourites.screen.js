import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { RestaurantInfo } from "../../restaurants/components/restaurant-info.components";
// import ConText
import { FavouritesContext } from "../../../services/favourites/favourites.context";
// import Style
import { RestaurantList, FavouritesArea } from "../components/setting.style";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <RestaurantList
      data={favourites}
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
  ) : (
    <FavouritesArea>
      <Text center>No favourites yet</Text>
    </FavouritesArea>
  );
};
