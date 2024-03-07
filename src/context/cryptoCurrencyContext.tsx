/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface CryptoCurrencyContextType {
  cryptoCurrency: string;
  setCryptoCurrency: Dispatch<SetStateAction<string>>;
}

export const cryptoCurrencyContext = createContext<CryptoCurrencyContextType>({
  cryptoCurrency: "",
  setCryptoCurrency: () => {},
});

const CryptocurrencyContext = ({ children }: { children: React.ReactNode }) => {
  const [cryptoCurrency, setCryptoCurrency] = useState<string>("bitcoin");

  return (
    <cryptoCurrencyContext.Provider
      value={{
        cryptoCurrency,
        setCryptoCurrency,
      }}
    >
      {children}
    </cryptoCurrencyContext.Provider>
  );
};

export default CryptocurrencyContext;
