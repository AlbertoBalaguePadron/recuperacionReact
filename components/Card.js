import { View, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  },
});

export default Card;
