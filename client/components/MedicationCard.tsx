import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { T_UserMedications } from "../data/data";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AntDesign } from "@expo/vector-icons";

const MedicationCard = ({ item }: { item: T_UserMedications }) => {
  return (
    <Swipeable renderRightActions={rightSwipeActions}>
      <View className=" bg-neutral-100 m-4 rounded-2xl ">
        <Text className="text-4xl text-red-700 pt-4 text-center font-semibold">
          {item.name}
        </Text>
        <View>
          <Text className="text-xl text-neutral-600 pl-8 py-2">
            <Text>Dosage: </Text>
            <Text className="  font-semibold text-red-800">
              {" "}
              {item.dosage}{" "}
            </Text>
            <Text> {item.dosage_unit}</Text>
          </Text>
        </View>
        <View className="px-6 ">
          <Image
            source={item.image}
            className="w-full   h-24 rounded-xl"
            resizeMode="cover"
          />
        </View>
        <View className="border m-4 rounded-xl relative flex justify-center items-center overflow-hidden">
          <View className="border-b text-lg text-neutral-300 pt-2 border-b-neutral-400">
            <Text>Notes</Text>
          </View>
          <View className=" bg-slate-200 w-full rounded-xl">
            <Text className="text-xl text-neutral-600 p-4 text-center">
              {item.notes}
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default MedicationCard;

const rightSwipeActions = () => {
  const handleDelete = () => {
    alert("Not implemented!");
  };
  return (
    <TouchableOpacity className="my-4" onPress={handleDelete}>
      <View
        style={{
          backgroundColor: "#ff8303",
          justifyContent: "center",
          alignItems: "flex-end",
          //   marginVertical: 10,
          borderRadius: 10,
          height: "100%",
        }}
      >
        <View className="text-[#1b1a17] px-5">
          <AntDesign name="delete" size={32} color="black" />
        </View>
        {/* <Text
        style={{
            color: "#1b1a17",
            paddingHorizontal: 10,
            fontWeight: "600",
            // paddingHorizontal: 30,
            paddingVertical: 20,
        }}
        >
        Delete
    </Text> */}
      </View>
    </TouchableOpacity>
  );
};
