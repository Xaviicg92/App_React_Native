import React from "react";

interface UserContext {
  isSignedIn: boolean;
  setIsSignedIn: (value: boolean) => void;
}

export const MyContext = React.createContext<UserContext>({
  isSignedIn: false,
  setIsSignedIn: (value) => {},
});

export const MyContextProvider = (props) => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  return (
    <MyContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {props.children}
    </MyContext.Provider>
  );
};
