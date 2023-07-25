import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MedicationScreenNavigationProp } from "../navigators/nav";

// id: "m1",
// user_id: "s1",
// name: "Aspirin",
// dosage_unit: "mg",
// dosage: 500,
// notes: "Take with food, should be taken with or without food,",
// image: img_pill_1,

const AddMedicationScreen = () => {
  const navigation = useNavigation<MedicationScreenNavigationProp>();
  return (
    <TouchableOpacity
      className="flex-1 justify-center items-center "
      onPress={() => navigation.navigate("Medication")}
    >
      <Text className="text-xl">Add Medication, not implemented</Text>
    </TouchableOpacity>
  );
};

export default AddMedicationScreen;
