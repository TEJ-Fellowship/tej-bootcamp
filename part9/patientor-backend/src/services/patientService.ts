import diaryData from "../../data/patients";
import { Patient } from "../types";

const getEntries = () => {
  return diaryData;
};

// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };

// const findById = (id: number): DiaryEntry | undefined => {
//   const entry = diaries.find((d) => d.id === id);
//   return entry;
// };

const addDiary = (entry: Patient) => {
  const newDiaryEntry = {
    ...entry,
  };

  diaryData.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getEntries,
  addDiary,
  // getNonSensitiveEntries,
  // findById,
};
