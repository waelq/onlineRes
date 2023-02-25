import { React } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View
  // Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
import styled from "styled-components";
// const isAndroid = Platform.OS ==="android"
// console.log(StatusBar.currentHeight); return height of statusBar in android only
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
// ios error in above line so we will check if android value it return margin ... (margin-top: ${StatusBar.currentHeight}px;)

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 }
})``;
// arrts is how controle style in attrubute
export const RestaurnatsScreen = () => (
  <SafeArea>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
      renderItem={() => <RestaurantInfo />}
      keyExtractor={(item, index) => item.name}
    />
  </SafeArea>
);

const styles = StyleSheet.create({
  search: {
    padding: 16
    // backgroundColor: "green",
  }
});
