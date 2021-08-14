import { StyleSheet } from "react-native";

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
    fontFamily: "HelveticaNeue",
    fontSize: 15,
    letterSpacing: 0.32,
    lineHeight: 18,
  },
  cancelButton: {
    color: "#9B9B9B",
    fontFamily: "HelveticaNeue",
    fontSize: 15,
    letterSpacing: 0.32,
  },
  titleSlide: {
    color: "#262628",
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    letterSpacing: 0.32,
    textAlign: "center",
    marginBottom: 30,
  },
  descriptionSlide: {
    color: "#4A4A4A",
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    letterSpacing: 0.32,
    textAlign: "center",
    marginEnd: 45,
    marginStart: 45,
    paddingStart: 30,
    paddingEnd: 30,
  },
  searchInput: {
    backgroundColor: "#EDEDED",
    opacity: 0.6,
    fontFamily: "HelveticaNeue",
    borderRadius: 5,
    flexDirection: "row",
    margin: 20,
  },
  lens: {
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
    fontFamily: "HelveticaNeue",
    color: "#9B9B9B",
    fontSize: 18,
    lineHeight: 18,
    marginStart: 5,
    marginTop: 3,
  },
  memeScore: {
    fontFamily: "HelveticaNeue",
    color: "#9B9B9B",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
  },
  NoResultsContainer: {
    marginTop: 68,
    marginStart: 5,
    marginEnd: 5,
  },
  NoResultsTitle: {
    fontFamily: "HelveticaNeue",
    color: "#262628",
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 0.32,
  },
  NoResultsDescription: {
    fontFamily: "HelveticaNeue",
    fontSize: 15,
    color: "#4A4A4A",
    textAlign: "center",
    letterSpacing: 0.32,
    margin: 20,
  },
});

export default styles;
