import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { T_User, T_UserMedications } from "../data/data";
import { RootState } from "../store";
import { img_user_1 } from "../assets";
import { userMedications } from "../data/data.mockup";

export interface MedicationState {
  medications: T_UserMedications[];
}

const initialState: MedicationState = {
  medications: userMedications,
};

export const medicationSlice = createSlice({
  name: "medication",
  initialState,
  reducers: {
    deleteMedication: (state, action: PayloadAction<string>) => {
      state.medications = state.medications?.filter(
        (med) => med.id !== action.payload
      );
      // return state;
    },
    // addMedication: (state, action: PayloadAction<T_UserMedications>) => {
    //   const medications = [...state.medications, action.payload];

    //   return {...state, medications: medications};
    // },
  },
});

export const selectMedications = (state: RootState) =>
  state.medication.medications;

// Action creators are generated for each case reducer function
export const { deleteMedication } = medicationSlice.actions;

export default medicationSlice.reducer;
