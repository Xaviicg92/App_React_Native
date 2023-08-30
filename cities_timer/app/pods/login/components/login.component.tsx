import React from "react";
import { TextInput, DefaultTheme, Provider } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";

interface Props {
  handleLogin: (name: string, pass: string) => void;
  navigation: any;
}

export const LoginComponent = (props: Props) => {
  const { handleLogin, navigation } = props;
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const changeName = (text: string) => {
    setName(text);
  };

  const changePassword = (text: string) => {
    setPassword(text);
  };
  const height = useHeaderHeight();

  return (
    <Provider theme={theme}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="position"
          // keyboardVerticalOffset={-height}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Image
              style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").width,
              }}
              source={{
                uri: "https://cdn.midjourney.com/7c17f2d6-238a-4cb0-9f9f-d58074576cb7/grid_0.png",
              }}
            ></Image>
          </View>

          <View style={styles.containerText}>
            <TextInput
              label="Name"
              value={name}
              underlineColor="white"
              textColor="white"
              onChangeText={changeName}
              style={styles.textInput}
            />

            <TextInput
              label="Password"
              underlineColor="white"
              textColor="white"
              value={password}
              onChangeText={changePassword}
              style={styles.textInput}
            />

            <View
              style={{
                flex: 0.7,
                justifyContent: "flex-end",
                alignContent: "flex-end",
              }}
            >
              <Pressable
                style={styles.button}
                onPress={() => handleLogin(name, password)}
              >
                <Text style={styles.text}>Login</Text>
              </Pressable>

              <Pressable
                style={styles.buttonSignin}
                onPress={() => navigation.navigate("Sign in")}
              >
                <Text style={styles.textsignin}>Sign in</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginLeft: "10%",
    marginRight: "10%",
    backgroundColor: "rgb(61,39,49)",
    color: "white",
  },

  containerText: {
    flex: 0.5,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgb(61,39,49)",
    marginBottom: 20,
    borderRadius: 20,
    width: 300,
    position: "absolute",
    top: Dimensions.get("window").height / 2,
    right: Dimensions.get("window").width / 2 - 150,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    height: 35,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "rgb(2,62,138)",
  },
  container: {
    flex: 1,
    paddingBottom: 0,
    margin: 0,
    backgroundColor: "rgb(177,208,196)",
  },
  buttonSignin: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,

    margin: 15,
  },
  textsignin: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white",
    onSurfaceVariant: "white",
  },
};
