import React, { createContext, useState } from "react";
import api from "../services/api"
import {useNavigation} from "@react-navigation/native"

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const[user, setUser] = useState({
        nome:'Marney Teste'
    });

    const navigation = useNavigation();


    async function signUp(email, password, name){ 
        try {
            
            const response = await api.post("/users", {
                name: name, 
                password: password, 
                email:email})

                navigation.goBack();

        } catch (error) {
            console.log("Erro ao cadastrar", error);
        }
    }

    return (
        <AuthContext.Provider value={{user, signUp}}>

            {children}

        </AuthContext.Provider>
    )
}

export default AuthProvider;