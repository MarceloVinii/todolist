import { StyleSheet, StatusBar } from "react-native"

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    paddingTop: statusBarHeight,
    paddingBottom: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  directionText: {
    flexDirection: "row",
    alignItems: "center",
  },
  firstText: {
    color: "#4EA8DE",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 5,
  },
  secondText: {
    color: "#5E60CE",
    fontSize: 28,
    fontWeight: "bold",
  },
})
