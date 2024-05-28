import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList } from "react-native";
import CardVehicleInfo from "../components/CardVehicleInfo";
import CardViajes from "../components/CardViajes";
import CardViajesInfoPasajero from "../components/CardViajesInfoPasajero";
import CardPost from "../components/CardPost";
import CommunityPostItem from "../components/CommunityPostItem";

const DATA = [
  {
    id: '01',
    readStatus: true,
    communityName: "Cut",
    postTime: "9:40 AM",
    postBody: "Hola comunidad, este espacio es para que nos dejen sus mensajes",
  },
  {
    id: '02',
    readStatus: false,
    communityName: "Futbol",
    postTime: "11:00 AM",
    postBody: "Hoy se arman las retas a las 3:00",
  }
]

export default function Main() {
  return (
    <>
      <Text>Hello world from main screen!</Text>
      <StatusBar style="auto" />
      <View style={{rowGap: 20}}>
        <CardVehicleInfo />
        <CardViajes />
        <CardViajesInfoPasajero />
        <CardPost/>
        <FlatList data={DATA} renderItem={({item}) => <CommunityPostItem readStatus={item.readStatus} communityName={item.communityName} postTime={item.postTime} postBody={item.postBody}/>}/>
      </View>
    </>
  );
}
