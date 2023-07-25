import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { img_meds_1 } from "../assets";
import { userMedications } from "../data/data.mockup";
import MedicationCard from "../components/MedicationCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  MedicationScreenNavigationProp,
  RootStackParamList,
} from "../navigators/nav";
import AddMedicationScreen from "./AddMedicationScreen";
import { selectUser } from "../slices/authSlice";
import { useSelector } from "react-redux";

const MedicationScreen = () => {
  const navigation = useNavigation<MedicationScreenNavigationProp>();
  const user = useSelector(selectUser);
  return (
    <SafeAreaView className="flex-1 bg-neutral-600 relative">
      <GestureHandlerRootView className="flex-1">
        <Image
          source={img_meds_1}
          className="w-full h-1/3 -mt-16"
          resizeMode="cover"
        />
        <TouchableOpacity
          className="absolute top-8 left-8 p-2 bg-slate-100 z-50 rounded-tl-xl rounded-br-xl"
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name="home" size={32} color="black" />
        </TouchableOpacity>
        <View className=" m-6">
          <Text className="text-3xl text-neutral-100 text-center font-semibold">
            Hi,
            <Text className="text-red-600"> {user?.name}</Text>, your
            medications
          </Text>
        </View>
        <FlatList
          data={userMedications}
          renderItem={({ item }) => <MedicationCard item={item} />}
        />
        <TouchableOpacity
          className="absolute bg-neutral-200 bottom-8 right-8 rounded-tl-xl rounded-br-xl p-2 border-2 border-red-900"
          onPress={() => navigation.navigate("AddMedication")}
        >
          <AntDesign name="pluscircleo" size={32} color="black" />
        </TouchableOpacity>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default MedicationScreen;
