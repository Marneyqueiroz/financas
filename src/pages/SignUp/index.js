import React, { useContext } from "react";
import { Platform } from "react-native";
import { AuthContext } from "../../contexts/auth";
import {
    AreaInput,
    Background,
    Container,
    Input,
    SubmitButton,
    SubmitText
} from "../Signin/styles";

export default function SignUp() {

    const { user } = useContext(AuthContext);

    function handleSignUp() {
        console.log(user)
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === "ios" ? 'padding' : ""}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Nome" />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Seu email" />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua Senha" />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    )
}