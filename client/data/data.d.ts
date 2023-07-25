import { ImageProps } from "react-native";

export type T_User = {
  id: string;
  name: string;
  image: ImageProps | string;
};

export type T_UserMedications = {
  id: string;
  user_id: string;
  name: string;
  dosage_unit: string;
  dosage: number;
  notes: string;
  image: ImageProps | string;
};
