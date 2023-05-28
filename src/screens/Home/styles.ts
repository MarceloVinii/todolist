import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  tasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginStart: 24,
    marginEnd: 24,
  },
  content: {
    flexDirection: "row",
  },
  textCreated: {
    color: "#4EA8DE",
  },
  textDone: {
    color: "#8284FA",
  },
  textCounter: {
    width: 25,
    height: 19,
    color: "#FFF",
    backgroundColor: "#333333",
    marginLeft: 8,
    textAlign: "center",
    borderRadius: 50,
  },
  addNewTask: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#262626",
    color: "#FFF",
    height: 56,
    width: "72%",
    padding: 16,
    fontSize: 16,
    marginLeft: 16,
    marginTop: -30,
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#1E6F9F",
    height: 56,
    width: 56,
    marginTop: -30,
    marginLeft: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  list: {
    flex: 1,
    marginTop: 20,
    marginStart: 22,
    marginEnd: 22,
    borderTopColor: "#FFF",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  listEmpty: {
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  textOne: {
    marginTop: 16,
    fontSize: 16,
    color: "#808080",
  },
  textTwo: {
    fontSize: 16,
    color: "#666666",
  },
})
