import { StyleSheet, View, Text } from "react-native";

interface Props {
  time: number;
}

export const Timer = (props: Props) => {
  const { time } = props;

  return (
    <View style={styles.timer}>
      <Text style={styles.digits}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </Text>
      <Text style={styles.digits_sec}>
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },

  digits: {
    fontSize: 50,
  },

  digits_sec: {
    fontSize: 50,
    color: "#f49e4c",
  },
});
