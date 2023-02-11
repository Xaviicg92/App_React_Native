import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginContainer } from "../login.container";
import { HomeContainer } from "../../home/home.container";
import { Button } from "react-native";
import { MyContext } from "../../../common/myContext";
import { SettingsScreen } from "../../settings/settings.screen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const MyStack = () => {
  const myContext = React.useContext(MyContext);
  const { isSignedIn } = myContext;
  return (
    <>
      <NavigationContainer>
        {isSignedIn ? (
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{ drawerType: "front" }}
          >
            <Drawer.Screen name="Home" component={HomeContainer} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginContainer}
              options={{ title: "Login" }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};
