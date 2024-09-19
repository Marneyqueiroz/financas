import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const[user, setUser] = useState({
        nome:'Marney Teste'
    });

    const[teste, setTeste] = useState({
        teste:"Botao teste"
    })

    return (
        <AuthContext.Provider value={{user, teste}}>

            {children}

        </AuthContext.Provider>
    )
}

export default AuthProvider;