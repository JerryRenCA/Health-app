import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./nav";
import { HomeScreen, LoginScreen, MedicationScreen } from "../screens";
import AddMedicationScreen from "../screens/AddMedicationScreen";

const NativeStackNavigator = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <NativeStackNavigator.Navigator
      initialRouteName="Medication"
      screenOptions={{ headerShown: false }}
    >
      <NativeStackNavigator.Screen name="Home" component={HomeScreen} />
      <NativeStackNavigator.Screen name="Login" component={LoginScreen} />
      <NativeStackNavigator.Screen
        name="Medication"
        component={MedicationScreen}
      />
      <NativeStackNavigator.Screen
        name="AddMedication"
        component={AddMedicationScreen}
      />
    </NativeStackNavigator.Navigator>
  );
};

export default RootNavigator;
