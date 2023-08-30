import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { MyContext } from "../../common/myContext";

export const HomeComponent = () => {
  const { currentImage } = React.useContext(MyContext);

  const images = {
    bigben: require("../../../assets/bigben.png"),
    statue_liberty: require("../../../assets/statue_liberty.png"),
    eiffel_tower: require("../../../assets/eiffel_tower.png"),
    colliseum: require("../../../assets/colliseum.png"),
    tower_pisa: require("../../../assets/tower_pisa.png"),
    pyramids_egypt: require("../../../assets/pyramids_egypt.png"),
  };

  const image = images[currentImage];

  return (
    <View style={styles.image}>
      <Image source={image} style={{ width: 300, height: 300 }}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 0.65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(234,221,187)",
  },
});
