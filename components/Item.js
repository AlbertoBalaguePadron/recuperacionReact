import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Item = ({ itemData }) => {
  const { nombre, fecha, prioridad } = itemData;

  return (
    <View style={styles.containerItem}>
      <Text style={styles.text} numberOfLines={1}>
        {nombre}
      </Text>

      <Text style={styles.text} numberOfLines={1}>
        {fecha}
      </Text>

      <Text style={styles.text} numberOfLines={1}>
        {prioridad}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "black",
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 2,
    marginHorizontal: 8,
    height: "90%",
    width: 340,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    width: "100%",
    fontSize: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
export default Item;
