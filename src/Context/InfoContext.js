import React, {useContext, useState} from "react";

const InfoContext = React.createContext();

export const useInfoContext = () => useContext(InfoContext);

const InfoContextProvider = ({children}) => {
  const [prodBalance, setProdBalance] = useState(0);
  const [products, setProducts] = useState(0);
  const [price, setPrice] = useState(480,76);

  const data ={
    prodBalance, setProdBalance, products, setProducts, price, setPrice
  }

  return <InfoContext.Provider value={data}>
    <InfoContext.Consumer>
        {() => children}
    </InfoContext.Consumer>
  </InfoContext.Provider>
}

export default InfoContextProvider