import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const WorkoutContext = createContext({
  pushExercises: [],
  legExercises: [],
  pullExercises: [],
  setPushExercises: (data) => {},
  setLegExercises: (data) => {},
  setPullExercises: (data) => {},
});

function WorkoutContextProvider({ children }) {
  const [pushExercises, setPushExercises] = useState([]);
  const [pullExercises, setPullExercises] = useState([]);
  const [legExercises, setLegExercises] = useState([]);

  const value = {
    pushExercises: pushExercises,
    pullExercises: pullExercises,
    legExercises: legExercises,
    setPushExercises: setPushExercises,
    setLegExercises: setLegExercises,
    setPullExercises: setPullExercises,
  };

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}

export default WorkoutContextProvider;
