import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorParamList } from "./nav";
import { HomeScreen } from "../screens";

const TabNavNavigator = createBottomTabNavigator<TabNavigatorParamList>();
const TabNavigator = () => {
  return (
    <TabNavNavigator.Navigator>
      <TabNavNavigator.Screen name="Home" component={HomeScreen} />
    </TabNavNavigator.Navigator>
  );
};

export default TabNavigator;
