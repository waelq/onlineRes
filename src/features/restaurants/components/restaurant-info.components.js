import React from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View
  // Platform,
} from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
// import star
import star from "../../../../assets/stars";
import open from "../../../../assets/open";
// import component
import { Spacer } from "../../../components/spacer/spacer.component";

const CardRestaurant = styled(Card)`
  background-color: white;
`;
const CardCover = styled(Card.Cover)`
  // background-color: red;
  padding: 20px;
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[1]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Ratting = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Open = styled(SvgXml)`
  flex-direction: row;
`;

// color: ${(props) => props.theme.colors.ui.error}; is how to get them from theme provider

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "test",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
    ],
    address = "Tell-Al-Soltan",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant;
  const rattingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <CardRestaurant elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Ratting>
            {rattingArray.map(() => (
              <SvgXml width={20} height={20} xml={star} />
            ))}
          </Ratting>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </CardRestaurant>
  );
};

const styles = StyleSheet.create({});
