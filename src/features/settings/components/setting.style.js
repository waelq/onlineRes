import styled from "styled-components/native";
import { List } from "react-native-paper";
import { FlatList } from "react-native";
import { SafeArea } from "../../../components/saveArea/saveArea.component";
export const ListItemView = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 }
})``;
export const FavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
