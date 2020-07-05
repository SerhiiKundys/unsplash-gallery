import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  activityIndicator: {
    marginTop: Dimensions.get("screen").height * 0.4,
  },
  postsContainer: {
    margin: 20,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    color: "#0099ff",
  },
  pagination: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
  },
  description: {
    flexDirection: "column",
    marginLeft: 10,
  },
});
