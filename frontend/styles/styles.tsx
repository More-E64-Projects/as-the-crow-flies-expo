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
  //styles specific to the HomeScreen
  containerHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    marginTop:40,
    marginRight: 10,
    zIndex: 1, // Ensures that the header stays on top of the background image
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden', 
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image covers the entire container
  },
  textTitle: {
    fontSize: 35,
    fontStyle: 'italic',
    color: "white",
    fontWeight: 'bold',
    fontFamily: "Comfortaa",
    paddingBottom: 20,
  },
  //Styles for NameInput comp
  textInput: {
    color: "hsla(215, 100%, 30%, 1.0)",
    backgroundColor: "hsla(58, 60%, 75%, 1.0)",
    borderColor: "hsla(215, 100%, 30%, 1.0)",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 100,
    elevation: 10,
    padding: 20,
  },
});

export default styles;
