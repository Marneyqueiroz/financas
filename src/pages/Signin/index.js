import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from "../../contexts/auth";

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleLogin() {

        signIn(email, password);

    }

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
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Sus senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>
                <SubmitButton
                    activeOpacity={0.8}
                    onPress={handleLogin}
                >
                    {loadingAuth ?(
                        <ActivityIndicator size={20} color="#FFF"/>
                    ):(<SubmitText>Acessar</SubmitText>)

                    }
                    
                </SubmitButton>
                <Link onPress={() => navigation.navigate("SignUp")}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </Container>
        </Background>
    )
}