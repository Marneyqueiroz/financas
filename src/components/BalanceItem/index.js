import React, { useMemo } from "react";
import { Container, Label, Balance } from "./styles"
import { Dimensions } from "react-native";

export default function BalanceItem({ data }) {

    const width = Dimensions.get("window").width;

    const labelName = useMemo(() => {

        if (data.tag === "saldo") {
            return {
                label: "Saldo atual",
                color: "#3b3dbf"
            }
        } else if (data.tag === "receita") {
            return {
                label : "Entradas de hoje",
                color : "#00b94a"
            }
        } else {
            return {
                label : "Saídas de hoje",
                color : "#ef463a"
            }
        }

    }, [data])

    return (
        <Container bg={labelName.color} wd = {width}>
            <Label>{labelName.label} </Label>
            <Balance>R$ {data.saldo}</Balance>
        </Container>
    )
}