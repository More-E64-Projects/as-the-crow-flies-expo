import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsla(158, 48%, 75%, 1.0)",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 150,
  },
  formContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 60,
  },
  subheading: {
    fontSize: 35,
  },
  text: {
    fontSize: 20,
    color: "hsla(215, 100%, 30%, 1.0)",
    fontFamily: "Comfortaa"
  },
  settingContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "hsla(58, 60%, 75%, 1.0)",
    borderColor: "hsla(215, 100%, 30%, 1.0)",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 100,
    padding: 10,
    margin: 10,
    elevation: 5,
    shadowOffset: {width: 3, height: 3},
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 5
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "clear",
  },
  modalWindow: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "hsla(215, 100%, 30%, 1.0)",
    borderRadius: 10,
    elevation: 10,
    padding: 10,
    shadowOffset: {width: 3, height: 3},
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 5

  },
});

export default styles;
