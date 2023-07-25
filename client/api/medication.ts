import { T_UserMedications } from "../data/data";

export const getMedications = async (
  user_id: string
): Promise<T_UserMedications[]> => {
  return [];
};

export const deleteMedication = async (med_id: string) => {
  return true;
};

export const addMedication = async (med: T_UserMedications) => {};
