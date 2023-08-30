import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { Text } from "react-native";

export const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && <Text>Hey some async call in progress ! </Text>;
};
