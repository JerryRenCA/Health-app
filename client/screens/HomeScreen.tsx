import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import {
  img_doctor_patient_2,
  img_doctor_pill_1,
  img_doctor_writing_1,
} from "../assets";
import Swiper from "react-native-swiper";
import { MedicationScreenNavigationProp } from "../navigators/nav";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const HomeScreen = () => {
  const navigation = useNavigation<MedicationScreenNavigationProp>();
  return (
    <View className="flex-1 bg-slate-500 -mt-24 relative">
      <Swiper showsButtons={true} containerStyle={{ height: "75%", width }}>
        <View className="w-full h-full flex items-center mt-24 justify-center">
          <Image
            source={img_doctor_patient_2}
            resizeMode="cover"
            className="h-full w-full"
          />
        </View>
        <View className="w-full h-full flex items-center mt-24 justify-center">
          <Image
            source={img_doctor_pill_1}
            resizeMode="cover"
            className="h-full w-full"
          />
        </View>
        <View className="w-full h-full flex items-center mt-24 justify-center bg-red-500">
          <Image
            source={img_doctor_writing_1}
            resizeMode="cover"
            className="h-full w-full"
          />
        </View>
      </Swiper>
      <View className="absolute top-[240] ">
        <Text className="text-4xl text-center text-gray-800 font-bold">
          Welcome to MedManager
        </Text>
        <Text className="text-2xl text-center text-gray-400 font-semibold">
          Your personal medication manager
        </Text>
      </View>
      <View className="absolute bottom-[120] w-full ">
        <TouchableOpacity
          className="mx-4 my-2 bg-slate-100 rounded-lg py-2 "
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-xl text-center text-slate-500 font-semibold">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="mx-4 my-2 bg-slate-100 rounded-lg py-2"
          onPress={() => alert("Not implemented!")}
        >
          <Text className="text-xl text-center text-slate-500 font-semibold">
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
