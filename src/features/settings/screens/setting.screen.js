import React, { useContext, useState, useCallback } from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
// re-mounting
import { useFocusEffect } from "@react-navigation/native";

// import components
import { SafeArea } from "../../../components/saveArea/saveArea.component";
import { List, Avatar } from "react-native-paper";
import { ListItemView, AvatarContainer } from "../components/setting.style";
import { AuthenticationContext } from "../../../services/authentication/authContext";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
export const SettingsScreens = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const { onLogout, user } = useContext(AuthenticationContext);

  const getPhoto = async (user) => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(
    useCallback(() => {
      getPhoto(user);
    }, [user])
  );
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon
              size={180}
              icon="human"
              backgroundColor={colors.brand.primary}
            />
          ) : (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor={colors.brand.primary}
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>

      <List.Section>
        <ListItemView
          title="Favourites"
          description="View Your Favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <ListItemView
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
