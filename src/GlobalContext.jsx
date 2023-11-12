import React, { createContext, useState } from 'react';

// Crear el contexto
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        // Define aquí tus estados globales
        isAuthenticated: false
    });

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};
