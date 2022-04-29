import { createContext, useState } from 'react';

export const MyNameContext = createContext();

export const MyNameContextProvider = ({ children }) => {
    const [myName, setMyName] = useState('John');

    return (
        <MyNameContext.Provider value={{ myName }}>
            {children}
        </MyNameContext.Provider>
    )
}
