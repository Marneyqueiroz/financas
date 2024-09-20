import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import {
    AreaInput,
    Background,
    Container,
    Input,
    SubmitButton,
    SubmitText
} from "../Signin/styles";
import { ActivityIndicator } from "react-native";

import { AuthContext, loadingAuth } from "../../contexts/auth";

export default function SignUp() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { signUp } = useContext(AuthContext);


    function handleSignUp() {

        if(name ==="" || password ==="" || email ==="") {
            alert("Preencha todos os dados!");
            return;
        }
        
        signUp(email, password, name);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === "ios" ? 'padding' : ""}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={name}
                        onChangeText={(value) => setName(value)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {loadingAuth ? (
                        <ActivityIndicator
                            size={20}
                            color="#FFF"
                        />
                    ) : (<SubmitText>Cadastrar</SubmitText>)}

                </SubmitButton>

            </Container>
        </Background>
    )
}