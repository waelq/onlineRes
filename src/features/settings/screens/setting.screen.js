import React, { useContext } from "react";
import { colors } from "../../../infrastructure/theme/colors";
// import components
import { SafeArea } from "../../../components/saveArea/saveArea.component";
import { List, Avatar } from "react-native-paper";
import { ListItemView, AvatarContainer } from "../components/setting.style";
import { AuthenticationContext } from "../../../services/authentication/authContext";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
export const SettingsScreens = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon
          size={180}
          icon="human"
          backgroundColor={colors.brand.primary}
        />
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
