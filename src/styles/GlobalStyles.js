import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centra los elementos verticalmente
    alignItems: "center", // Centra los elementos horizontalmente
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btnSubmit: {
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "#2f7265",
    width: 302,
    height: 51,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 44,
    paddingVertical: 7,
    marginVertical: 5,
  },
  btnSubmitTexto: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
    textAlign: "left",
  },
  btnDepositarVerde: {
    borderRadius: 9,
    backgroundColor: "#2f7265",
    width: 130,
    height: 37,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginVertical: 5,
  },
  btnDepositarVerdeTexto: {
    fontSize: 19,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
    textAlign: "left",
  },
  btnDepositarAzul: {
    borderRadius: 9,
    backgroundColor: "#4b61b9",
    width: 166,
    height: 37,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginVertical: 5,
  },
  btnDepositarAzulTexto: {
    fontSize: 19,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
    textAlign: "left",
  },
  btnRetirarTexto: {
    fontSize: 19,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
    textAlign: "left",
  },
  btnRetirar: {
    borderRadius: 9,
    backgroundColor: "#2f7265",
    width: 130,
    height: 37,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
});

export default styles;
