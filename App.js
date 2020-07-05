import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FullScreenImage from "./src/components/FullScreenImage/FullScreenImage";
import Gallery from "./src/components/Gallery/Gallery";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const StackNavContainer = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavContainer.Navigator>
          <StackNavContainer.Screen
            name="Gallery"
            component={Gallery}
            options={{
              title: "Unsplash Gallery",
              headerStyle: {
                backgroundColor: "#0099ff",
                height: 70,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 22,
                marginLeft: 16,
              },
            }}
          />
          <StackNavContainer.Screen
            name="FullScreenImage"
            component={FullScreenImage}
            options={{
              title: null,
              headerStyle: {
                backgroundColor: "#000",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 22,
                marginLeft: 16,
              },
            }}
          />
        </StackNavContainer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
