import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
// console.log(StatusBar.currentHeight); return height of statusBar in android only
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
// ios error in above line so we will check if android value it return margin ... (margin-top: ${StatusBar.currentHeight}px;)
