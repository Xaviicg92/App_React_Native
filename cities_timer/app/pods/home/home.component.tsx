import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

export const HomeComponent = () => {
  return (
    <View style={styles.image}>
      <Avatar.Image
        size={200}
        source={require("../../../assets/building1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
});
