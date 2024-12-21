import React, { createContext, useState } from 'react';
import axios from '../api/axios';
import { useEffect } from 'react';
import { useContext } from 'react';
const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [szakdogak, setSzakdogak] = useState([]);

  const fetchSzakdogak = async (callback) => {
    const { data } = await axios.get('api/szakdogak')
    callback(data)
  };

  useEffect(() => {
    fetchSzakdogak(setSzakdogak)
  }, [])

  return (
    <ApiContext.Provider value={{ szakdogak }}>
      {children}
    </ApiContext.Provider>
  );
};

export default function useAdatContext() {
  return useContext(ApiContext)
}