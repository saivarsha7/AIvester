import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  mainHeading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 14,
    color: "#bbb",
    textAlign: "center",
    marginBottom: 20,
  },
  featuresList: {
    width: "100%",
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 8,
  },
  getStartedButton: {
    backgroundColor: "orange",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  getStartedText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "orange",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default styles;
