import React from "react";
import {
  Text,
  Button,
  StyleSheet,
  View,
  Pressable,
  Switch,
} from "react-native";
import { updateTime } from "./api/api.update.userTime";
import { MyContext } from "../../common/myContext";
import { updateUserBuilding } from "./api/api.update.userBuildingTime";
import { Timer } from "./timer";

export const StopWatch = () => {
  const [time, setTime] = React.useState(0);
  const myContext = React.useContext(MyContext);
  const [isRunning, setIsRunning] = React.useState(false);

  const handleStarStop = () => {
    setIsRunning(!isRunning);
  };

  const handleEndTimer = () => {
    setIsRunning(false);
    updateUserBuilding(myContext.id, myContext.currentIdBuilding, time);
    myContext.setTime(myContext.time + time);
    setTime(0);
  };

  React.useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, time]);

  React.useEffect(() => {
    updateTime(myContext.id, myContext.time);
  }, [time]);

  return (
    <>
      <View style={styles.time}>
        <Timer time={time} />

        {/* <Pressable onPress={handleStarStop} style={styles.button}>
          <Text>{isRunning ? "Stop" : "Start"}</Text>
        </Pressable> */}
        <Switch
          style={{
            transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
            marginTop: 20,
          }}
          trackColor={{ false: "#767577", true: "#3b8ea5" }}
          thumbColor={isRunning ? "#f49e4c" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleStarStop}
          value={isRunning}
        />

        <Pressable onPress={handleEndTimer} style={styles.button}>
          <Text>END TIME</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  time: {
    alignItems: "center",
    backgroundColor: "rgb(234,221,187)",
    flex: 0.35,
  },

  button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "#d4a276",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 30,
    borderRadius: 20,
  },
});
