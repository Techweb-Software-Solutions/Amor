import { StyleSheet, Dimensions, Platform } from "react-native";
const width = Dimensions.get("window").width;

export default StyleSheet.create({
  listItem: {
    // maxWidth: Dimensions.get("window").width,
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 20,
    margin: 10,
    borderRadius: 4,
    width: 190,
    height: "100%"
  },
  image: {
    alignSelf: "center",
    width: "75%",
    height: "70%",
    marginTop: "8%"
  },
  title: { fontSize: 10 },
  productName: { fontSize: 15, alignSelf: "center", marginTop: 5 },
  updateStack: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5
  },
  updateButton: {
    width: 35,
    height: 30,
    backgroundColor: "powderblue"
  },
  radiusLeft: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  raduisRight: { borderTopRightRadius: 5, borderBottomRightRadius: 5 },
  quantityText: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 12,
    fontWeight: "500"
  },
  updateButtonText: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: "15%",
    fontWeight: "100"
  }
});