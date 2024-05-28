import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import CardVehicleInfo from "../components/CardVehicleInfo";
import CardViajes from "../components/CardViajes";
import CardViajesInfoPasajero from "../components/CardViajesInfoPasajero";

export default function Main() {
  return (
    <>
      <Text>Hello world from main screen!</Text>
      <StatusBar style="auto" />
      <View style={{rowGap: 20}}>
        <CardVehicleInfo />
        <CardViajes />
        <CardViajesInfoPasajero />
      </View>
    </>
  );
}
