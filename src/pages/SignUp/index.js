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

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const {signUp} = useContext(AuthContext);


    function handleSignUp() {

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
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    )
}