import React from "react";
import { Alert, Button, Pressable, StyleSheet, View, Text } from "react-native";
import { MyContext } from "../../common/myContext";

export const LogoutComponent = () => {
  const { setIsSignedIn } = React.useContext(MyContext);

  const alertLogout = () =>
    Alert.alert("LOGOUT", "Are you sure to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => setIsSignedIn(false) },
    ]);

  return (
    <View style={styles.content}>
      <Pressable onPress={alertLogout} style={styles.button}>
        <Text>LOGOUT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(234,221,187)",
  },
  button: {
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "5%",
    backgroundColor: "#d4a276",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 30,
    borderRadius: 20,
  },
});
