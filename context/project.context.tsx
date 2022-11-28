import React from 'react';
import {createContext, useContext, useState} from 'react';

interface ProjectContext {
  counter: number;
  setCounter: (value: number) => void;
}
const ProjectContext = createContext<ProjectContext>({} as ProjectContext);

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectContextProvider = ({children}: {children: JSX.Element}) => {
  const [counter, setCounter] = useState(0);
  return (
    <ProjectContext.Provider
      value={{
        counter,
        setCounter,
      }}>
      {children}
    </ProjectContext.Provider>
  );
};
