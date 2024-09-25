import { StatusBar } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin-top: ${StatusBar.currentHeight || 0}px;
margin-left: 15px;
margin-bottom: 15px;
width: 100%;
max-height: 60px;
`;

export const Title = styled.Text`
font-size: 22px;
margin-left: 8px;
`;

export const ButtonMenu = styled.TouchableOpacity`
justify-content: center;
align-items: center;
`;