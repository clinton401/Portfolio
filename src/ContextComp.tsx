import {FC, ReactNode, createContext} from "react"

export type ProjectType = {
    name: string,
    imgUrl: string,
    description: string,
    technologies: string[],
    filters: string
    liveUrl: string,
    githubUrl: string
}
export type ExperienceType = {
    name: string,
    description: string,
    time: string
}

type MyContextType = {
  skills: string[];
  projects: ProjectType[];
  scrollDirection: string;
  navigation: (route: string) => void;
  experiences: ExperienceType[];
};
export const MyContext = createContext<MyContextType | undefined>(undefined);


const ContextComp: FC<{
  children: ReactNode;
  values: MyContextType;
}> = ({children, values}) => {
    return <MyContext.Provider value={values}>
      {children}
  </MyContext.Provider>;
};

export default ContextComp