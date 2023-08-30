import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeContainer } from "../../pods/home/home.container";
import { MyContext } from "../../common/myContext";
import { UserStatsScene } from "../../scenes/user.stats.scene";
import { LogoutContainer } from "../../pods/logout/logout.container";
import { LoginScene } from "../../scenes/login.scene";
import { SigninScene } from "../../scenes/signin.scene";
import { BuildingsScene } from "../../scenes/buildings.scene";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const MyStack = () => {
  const myContext = React.useContext(MyContext);
  const { isSignedIn, name } = myContext;
  return (
    <>
      <NavigationContainer>
        {isSignedIn ? (
          <Drawer.Navigator
            initialRouteName={`${name}´s city`}
            screenOptions={{
              drawerType: "front",
              drawerStyle: {},
            }}
          >
            <Drawer.Screen name={`${name}´s city`} component={HomeContainer} />
            <Drawer.Screen name="My Stats" component={UserStatsScene} />
            <Drawer.Screen name="Buildings" component={BuildingsScene} />
            <Drawer.Screen name="Logout" component={LogoutContainer} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScene}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="Sign in"
              component={SigninScene}
              options={{ title: "Sign in" }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};
