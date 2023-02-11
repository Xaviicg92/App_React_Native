import React from "react";
import { Text, Button, StyleSheet, View, Pressable } from "react-native";

export const StopWatch = () => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  const handleStarStop = () => {
    setIsRunning(!isRunning);
  };

  React.useEffect(() => {
    if (isRunning) {
      setTimeout(() => setTime(time + 1), 1000);
    }
  }, [isRunning, time]);

  console.log("hola");

  return (
    <>
      <View style={styles.time}>
        <Text>{time}</Text>
      </View>
      <Pressable onPress={handleStarStop} style={styles.button}>
        <Text>{isRunning ? "Stop" : "Start"}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  time: {
    alignItems: "center",
  },

  button: {
    marginLeft: "20%",
    marginRight: "20%",
    backgroundColor: "pink",
    alignItems: "center",
  },
});
