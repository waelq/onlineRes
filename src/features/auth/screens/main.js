import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  MainBackground,
  MainCover,
  MainContainer,
  AuthButton,
  Title
} from "../components/main.style";
export const MainScreen = ({ navigation }) => {
  return (
    <MainBackground>
      <MainCover />
      <Title>Restaurent X</Title>
      <MainContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="medium" />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </MainContainer>
    </MainBackground>
  );
};
