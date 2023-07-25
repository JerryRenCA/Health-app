export type RootStackParamList = {
  Home: undefined;
  Medication: undefined;
  Login: undefined;
  AddMedication: undefined;
};

export type TabNavigatorParamList = {
  Home: undefined;
  Medication: undefined;
  Login: undefined;
};

export type MedicationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Medication"
>;
