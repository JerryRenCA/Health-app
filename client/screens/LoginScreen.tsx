import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { img_doctor_patient_1 } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slices/authSlice";
import { useNavigation } from "@react-navigation/native";
import { MedicationScreenNavigationProp } from "../navigators/nav";

const LoginScreen = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigation = useNavigation<MedicationScreenNavigationProp>();

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { username, password } });
    console.log("login:", user);
    // alert(`login:${username},${password}`);
    navigation.navigate("Medication");
  };
  return (
    <SafeAreaView className="flex-1 bg-neutral-600">
      <Image
        source={img_doctor_patient_1}
        className="w-full h-1/2 -mt-16"
        resizeMode="cover"
      />
      <View className="flex-1 items-center">
        <Text className="text-4xl font-bold py-6 text-red-600 mx-auto mt-6">
          Login
        </Text>
        <View className="w-full mt-6">
          <TextInput
            placeholder="Username"
            placeholderTextColor={"#eee"}
            className="border-b-2 border-red-600 w-3/4 mx-auto py-2 px-4 text-xl text-neutral-300"
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#eee"}
            className="border-b-2 border-red-600 w-3/4 mx-auto py-2 px-4 text-xl  text-neutral-300"
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          className="w-3/4 rounded-lg py-2 px-4 mt-[60] bg-red-600"
          onPress={handleLogin}
        >
          <Text className=" text-white mx-auto  text-center text-xl ">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
