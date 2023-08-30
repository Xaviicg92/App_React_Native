import React from "react";

interface UserContext {
  isSignedIn: boolean;
  setIsSignedIn: (value: boolean) => void;
  time: number;
  setTime: (value: number) => void;
  id: string;
  setId: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  currentImage?: string;
  setCurrentImage: (value: string) => void;
  currentIdBuilding: string;
  setCurrentIdBuilding: (value: string) => void;
}

export const MyContext = React.createContext<UserContext>({
  isSignedIn: false,
  setIsSignedIn: (value) => {},
  time: 0,
  setTime: (value) => {},
  id: "",
  setId: (value) => {},
  name: "",
  setName: (value) => {},
  currentImage: "",
  setCurrentImage: (value) => {},
  currentIdBuilding: "",
  setCurrentIdBuilding: (value) => {},
});

export const MyContextProvider = (props) => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("Home");
  const [currentImage, setCurrentImage] = React.useState("bigben");
  const [currentIdBuilding, setCurrentIdBuilding] = React.useState(
    "63eff59aea61197a3467b858"
  );

  return (
    <MyContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        time,
        setTime,
        id,
        setId,
        name,
        setName,
        currentImage,
        setCurrentImage,
        currentIdBuilding,
        setCurrentIdBuilding,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
