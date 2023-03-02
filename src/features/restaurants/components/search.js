import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = ({ isFavouriteToggle, isToggleFuncion }) => {
  const { keyword, search } = useContext(LocationContext);
  //   console.log(keyword);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouriteToggle ? "heart" : "heart-outline"}
        onIconPress={isToggleFuncion}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
