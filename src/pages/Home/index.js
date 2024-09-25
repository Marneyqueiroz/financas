import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";

import { Background, ListBalance } from "./styles"

import api from "../../services/api";
import { format } from "date-fns"

import { useIsFocused } from "@react-navigation/native";

import BalanceItem from "../../components/BalanceItem";

export default function Home() {

    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState();

    const [dateMoviment, setDateMoviment] = useState(new Date());
    const { signOut, user } = useContext(AuthContext);

    useEffect(() => {

        let isActive = true;

        async function getMoviments() {

            let dateFormated = format(dateMoviment, "dd/MM/yyyy");

            const balance = await api.get("/balance", {
                params: {
                    date: dateFormated,
                }
            })

            if(isActive) {
                setListBalance(balance.data);
            }

        }

        getMoviments();

        return () => isActive=false;

    }, [isFocused])

    return (
        <Background>
            <Header title="Minhas Movimentações" />

            <ListBalance
            data={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.tag}
            renderItem={({item}) => (<BalanceItem data={item}/>)}
            />
        </Background>
    )
}
