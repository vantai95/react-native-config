import { Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: "#78aef9",
    padding: 15
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },
  groupInput: {
    flex: 2,
    padding: 15
  },
  groupButton: {
    flex: 3,
    padding: 15,
    alignItems: "center"
  },
  btn: {
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#6ae1c4"
  },
  btnFacebook: {
    marginRight: 15,
    borderRadius: 20,
    backgroundColor: "#3b5998"
  },
  btnGoogle: {
    marginLeft: 15,
    borderRadius: 20,
    backgroundColor: "#e94335"
  },
  noteText: {
    color: "gray",
    margin: 20
  },
  textBold: {
    fontWeight: "bold"
  },
  textColor: {
    color: "gray"
  },
  iconColor: {
    color: "gray"
  },
  rowRight: {
    justifyContent: "flex-end"
  },
  mt15: {
    marginTop: 15
  }
};
