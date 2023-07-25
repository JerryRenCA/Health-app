import { img_pill_1, img_pill_2, img_pill_3, img_user_1 } from "../assets";
import { T_User, T_UserMedications } from "./data";

export const user: T_User = {
  id: "s1",
  name: "John Doe",
  // image:require("../assets/images/user.png"),
  image: img_user_1,
};

export const userMedications: T_UserMedications[] = [
  {
    id: "m1",
    user_id: "s1",
    name: "Aspirin",
    dosage_unit: "mg",
    dosage: 500,
    notes: "Take with food, should be taken with or without food,",
    image: img_pill_1,
  },
  {
    id: "m2",
    user_id: "s1",
    name: "Ibuprofen",
    dosage_unit: "mg",
    dosage: 200,
    notes: "Take with food",
    image: img_pill_2,
  },
  {
    id: "m3",
    user_id: "s1",
    name: "Paracetamol",
    dosage_unit: "mg",
    dosage: 500,
    notes: "Take with food",
    image: img_pill_3,
  },
];
