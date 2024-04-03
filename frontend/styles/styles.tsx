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
    justifyContent: "space-around",
  },
  headingText: {
    fontSize: 50,
    color: "hsla(215, 100%, 30%, 1.0)",
  },
  text: {
    fontSize: 25,
    color: "hsla(215, 100%, 30%, 1.0)",
  },
  button: {
    backgroundColor: "hsla(58, 60%, 75%, 1.0)",
    borderColor: "hsla(215, 100%, 30%, 1.0)",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 100,
    padding: 10,
  },
});

export default styles;
