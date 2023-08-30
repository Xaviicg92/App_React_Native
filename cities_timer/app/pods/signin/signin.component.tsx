import React from "react";
import {
  Button,
  View,
  Text,
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import { DefaultTheme, Provider, TextInput } from "react-native-paper";
import * as Yup from "yup";
import { signin } from "./api/signin.api";
import { useHeaderHeight } from "@react-navigation/elements";

interface Props {
  myHandleSubmit: (value: Object) => void;
}

export const SigninComponent = (props: Props) => {
  const { myHandleSubmit } = props;

  const headerHeight = useHeaderHeight();
  return (
    <Formik
      initialValues={{ name: "", password: "", repeatPassword: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        password: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        repeatPassword: Yup.string().required("Required"),
      })}
      onSubmit={(values) => myHandleSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <Provider theme={theme}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              style={styles.container}
              behavior="position"
              keyboardVerticalOffset={-headerHeight}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{
                    uri: "https://cdn.midjourney.com/99e1dfaa-0a5e-49d4-8e18-21a6263bb677/grid_0.png",
                  }}
                  style={{ width: 200, height: 200 }}
                ></Image>
              </View>

              <View>
                <TextInput
                  label={"Name"}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  style={styles.textInput}
                />
                {errors.name ? <Text>{errors.name}</Text> : null}

                <TextInput
                  label={"Password"}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  style={styles.textInput}
                />
                {errors.password ? <Text>{errors.password}</Text> : null}

                <TextInput
                  label={"Repeat Password"}
                  onChangeText={handleChange("repeatPassword")}
                  onBlur={handleBlur("repeatPassword")}
                  value={values.repeatPassword}
                  style={styles.textInput}
                />
                {errors.repeatPassword ? (
                  <Text>{errors.repeatPassword}</Text>
                ) : null}
                {/* <View style={{ alignItems: "center" }}>
                <Pressable style={styles.submit} onPress={() => handleSubmit()}>
                  <Text style={styles.submiText}>Submit</Text>
                </Pressable>
              </View> */}
                <Pressable
                  style={styles.buttonSignin}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.textsignin}>Sign in</Text>
                </Pressable>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </Provider>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    margin: 0,
    backgroundColor: "rgb(233,229,208)",
  },
  textInput: {
    backgroundColor: "rgb(233,229,208)",
    marginLeft: 30,
    marginRight: 30,
  },
  submit: {
    marginTop: 50,
    backgroundColor: "white",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 30,
  },

  submiText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  buttonSignin: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",

    margin: 15,
  },
  textsignin: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    onSurfaceVariant: "black",
  },
};
