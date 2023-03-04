import React, { useState, useContext } from "react";
import {
  MainBackground,
  MainCover,
  MainContainer,
  AuthButton,
  AuthTextInput,
  Title,
  ErrorContainer
} from "../components/main.style";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authContext";
import { Spacer } from "../../../components/spacer/spacer.component";
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  // console.log({ error });
  return (
    <MainBackground>
      <MainCover />
      <Title>Restaurent X</Title>
      <MainContainer>
        <AuthTextInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="medium" />
        <AuthTextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="medium">
          {isLoading ? (
            <ActivityIndicator animating={true} color={MD2Colors.blue400} />
          ) : (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          )}
        </Spacer>
      </MainContainer>
      <Spacer size="medium" />
      <AuthButton
        // icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Back
      </AuthButton>
    </MainBackground>
  );
};
