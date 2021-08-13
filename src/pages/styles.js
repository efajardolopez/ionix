import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  button: {
    width: 185,
    height: 50,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 42,
    marginBottom: 38,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    letterSpacing: 0.32,
  },
  titleSlide: {
    color: "#4A4A4A",
    fontSize: 20,
    letterSpacing: 0.32,
    textAlign: "center",
    marginBottom: 35,
  },
  descriptionSlide: {
    color: "#4A4A4A",
    fontSize: 20,
    letterSpacing: 0.32,
    textAlign: "center",
    paddingEnd: 40,
    paddingStart: 40,
  },
});

export default styles;
