import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { milisecToMin } from "../../common/milisecToMin";
import { MyContext } from "../../common/myContext";

export const UserStats = () => {
  const { time } = React.useContext(MyContext);
  const timeInMinutes = milisecToMin(time);
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.textTop}> YOUR TOTAL TIME IS:</Text>
        <Text style={styles.digit}>{timeInMinutes}</Text>
        <Text style={styles.textDown}>MINUTES</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(234,221,187)",
  },
  textDown: {
    margin: 50,

    fontSize: 30,
  },
  textTop: {
    margin: 50,
    fontSize: 20,
  },
  digit: {
    fontSize: 70,
    color: "#f49e4c",
  },
});
