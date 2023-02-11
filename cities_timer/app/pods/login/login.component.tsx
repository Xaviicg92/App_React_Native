import React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MyContext } from "../../common/myContext";

export const LoginComponent = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const myContext = React.useContext(MyContext);

  const changeName = (text: string) => {
    setName(text);
  };

  const changePassword = (text: string) => {
    setPassword(text);
  };

  const onPress = () => {
    myContext.setIsSignedIn(true);
  };

  return (
    <>
      <View style={styles.containerText}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={changeName}
          style={styles.textInput}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={changePassword}
          style={styles.textInput}
        />
      </View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: "10%",
  },

  containerText: {
    flex: 0.7,
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    margin: "10%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
