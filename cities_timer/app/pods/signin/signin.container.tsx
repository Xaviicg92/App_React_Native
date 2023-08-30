import React from "react";
import { ActivityIndicator, Alert, View, StyleSheet } from "react-native";
import { MyContext } from "../../common/myContext";
import { mapFromApiToVm } from "../login/components/user.mapper";
import { signin } from "./api/signin.api";
import { SigninComponent } from "./signin.component";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";

export const SigninContainer = () => {
  const myNewUser = React.useContext(MyContext);
  const { promiseInProgress } = usePromiseTracker();

  const onPressSignin = async (values) => {
    const { name, password, repeatPassword } = values;
    if (password !== repeatPassword) {
      return Alert.alert(
        "Error: Passwords must be equals",
        "Repeat same password",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("Accept Pressed") },
        ]
      );
    }

    const newUser = await trackPromise(signin(name, password));
    console.log(newUser);
    if (newUser) {
      const user = mapFromApiToVm(newUser);
      myNewUser.setId(user.id);
      myNewUser.setName(user.name);
      myNewUser.setTime(user.time);

      Alert.alert("Success", "User create", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => myNewUser.setIsSignedIn(true) },
      ]);
    } else {
      Alert.alert("Error User already exists", "Choose another name", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("Accept Pressed") },
      ]);
    }
  };

  return (
    <>
      {promiseInProgress ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <SigninComponent myHandleSubmit={onPressSignin} />
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
