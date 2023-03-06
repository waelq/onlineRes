import React from "react";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  MainBackground,
  MainCover,
  MainContainer,
  AuthButton,
  Title,
  LottieViewWrapper
} from "../components/main.style";
export const MainScreen = ({ navigation }) => {
  return (
    <MainBackground>
      <MainCover />
      <LottieViewWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </LottieViewWrapper>
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
