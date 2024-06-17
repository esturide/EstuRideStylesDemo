import {Text, View} from "react-native";
import styles from "../styles/GlobalStyles";
import Button from "../components/ButtonExample";
import ButtonSubmit from "../components/ButtonSubmit";
import BtnDepositarVerde from "../components/ButtonDepositGreen";
import ButtonWithdraw from "../components/ButtonWithdraw";
import ButtonDepositBlue from "../components/ButtonDepositBlue";
import React from "react";

export default function ButtonsDemo() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Componentes</Text>
            <Button title="Press me!" onPress={() => alert("Button Pressed!")}/>
            <ButtonSubmit title="Label"/>
            <BtnDepositarVerde/>
            <ButtonWithdraw/>
            <ButtonDepositBlue/>
        </View>
    );
}
