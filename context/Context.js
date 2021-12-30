import React, {createContext, useState, useEffect} from 'react';
export const Context = createContext();

export const ContextProvider = props => {
  const [happyHourData, setHappyHourData] = useState(null);
  const [publicAttractions, setPublicAttractions] = useState(null);
  const [contextData, setContextData] = useState(null);
  const [isRandom, setIsRandom] = useState(true);

  return (
    <Context.Provider
      value={{
        happyHourData,
        setHappyHourData,
        contextData, 
        setContextData,
        isRandom, 
        setIsRandom,
        publicAttractions, 
        setPublicAttractions
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
