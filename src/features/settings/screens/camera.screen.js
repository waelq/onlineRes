import React, { useRef, useState, useEffect, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authContext";
import { ProfileCamera } from "../components/setting.style";
export const CameraScreen = ({ navigation }) => {
  const [permission, setPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
      //   console.log({ photo });
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await ProfileCamera.requestCameraPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);
  if (permission === null) {
    return <View />;
  }
  if (permission === false) {
    return <Text>No accesse to camera </Text>;
  }
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={ProfileCamera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};
