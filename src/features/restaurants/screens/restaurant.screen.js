import { React } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  // Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
import styled from "styled-components";
// const isAndroid = Platform.OS ==="android"
// console.log(StatusBar.currentHeight); return height of statusBar in android only
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
export const RestaurnatsScreen = () => (
  <SafeArea >
    <View style={styles.search}>
      <Searchbar
      //   placeholder="Search"
      //   onChangeText={onChangeSearch}
      //   value={searchQuery}
      />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeArea>
);

const styles = StyleSheet.create({
  
  search: {
    padding: 16,
    // backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
