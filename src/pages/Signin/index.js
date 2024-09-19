import React, { useContext } from "react";
import { Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'

import {
    AreaInput,
    Background,
    Container,
    Input,
    Link,
    LinkText,
    Logo,
    SubmitButton,
    SubmitText
} from './styles';

export default function SignIn() {

    const navigation = useNavigation();

    return (
        <Background>
            <Container
                behavior={Platform.OS === "ios" ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />
                <AreaInput>
                    <Input
                        placeholder="Seu email"
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Sus senha"
                    />
                </AreaInput>
                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>
                <Link onPress={() => navigation.navigate("SignUp")}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </Container>
        </Background>
    )
}