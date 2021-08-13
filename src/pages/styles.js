import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  cancelButton: {
    color: "#9B9B9B",
    fontSize: 15,
    letterSpacing: 0.32,
  },
  titleSlide: {
    color: "#4A4A4A",
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    letterSpacing: 0.32,
    textAlign: "center",
    marginBottom: 35,
  },
  descriptionSlide: {
    color: "#4A4A4A",
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    letterSpacing: 0.32,
    textAlign: "center",
    paddingEnd: 40,
    paddingStart: 40,
  },
  searchInput: {
    backgroundColor: "#EDEDED",
    borderRadius: 5,
    flexDirection: "row",
    margin: 20,
  },
  viewIcon: {
    padding: 12,
  },
  memeContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    marginBottom: 32,
  },
  memeImage: {
    aspectRatio: 1.5,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  memeTitle: {
    fontSize: 20,
    fontFamily: "HelveticaNeue",
    marginBottom: 20,
  },
  memeNumComments: {
    color: "#9B9B9B",
    fontSize: 18,
    lineHeight: 18,
    marginStart: 5,
    marginTop: 3,
  },
  memeScore: {
    color: "#9B9B9B",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default styles;
