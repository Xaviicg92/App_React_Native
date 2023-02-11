import React from "react";
import { LoginComponent } from "./login.component";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "../../dbConnection/connection";
import { loginModel } from "../../mongodb/mongodb";

export const LoginContainer = () => {
  async function checkConnect() {
    try {
      await connect();

      // const login = await loginModel.find();
      // console.log(login);
    } catch (err) {
      console.log(err);
    }
  }
  checkConnect();
  return (
    <>
      <View style={styles.container}>
        <LoginComponent></LoginComponent>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "f1faee",
    justifyContent: "center",
  },
});
