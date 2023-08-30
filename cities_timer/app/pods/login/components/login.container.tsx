import React from "react";
import { LoginComponent } from "../components/login.component";
import { Alert, StyleSheet, Text, View } from "react-native";
import { login } from "../api/login.api";
import { mapFromApiToVm } from "./user.mapper";
import { MyContext } from "../../../common/myContext";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";

export const LoginContainer = () => {
  const myUserContext = React.useContext(MyContext);
  const { promiseInProgress } = usePromiseTracker();
  const navigation = useNavigation();

  const alertLoginFailed = () =>
    Alert.alert("Failed to Login", "User or Password are wrong", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("Accept Pressed") },
    ]);

  const onPressedLogin = async (name: string, password: string) => {
    const apiResult = await trackPromise(login(name, password));
    if (apiResult === undefined) {
      alertLoginFailed();
    } else {
      const user = mapFromApiToVm(apiResult);
      myUserContext.setId(user.id);
      myUserContext.setName(user.name);
      myUserContext.setTime(user.time);
      myUserContext.setIsSignedIn(true);
    }
  };
  return (
    <>
      {promiseInProgress ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.container}>
          <LoginComponent
            handleLogin={onPressedLogin}
            navigation={navigation}
          ></LoginComponent>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "f1faee",
    justifyContent: "center",
  },
  position: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
