import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const AddData = ({ addItems }) => {
  const { nombre, setNombre } = useState("");
  const { fecha, setFecha } = useState("");
  const { prioridad, setPrioridad } = useState("");

  const nombreHandle = (input) => {
    setNombre(input);
  };

  const fechaHandle = (input) => {
    setFecha(input);
  };

  const prioridadHandle = (input) => {
    setPrioridad(input);
  };

  const validarDatos = () => {
    addItems({
      nombre,
      fecha,
      prioridad,
    });

    setNombre("");
    setFecha("");
    setPrioridad("");
  };

  return (
    <View style={styles.card}>
      <TextInput
        value={nombre}
        style={{ paddingTop: 10 }}
        placeholder="Nombre de la tarea"
        OnChangeText={nombreHandle}
      />
      <TextInput
        value={fecha}
        style={{ paddingTop: 10 }}
        placeholder="Fecha límite"
        OnChangeText={fechaHandle}
      />
      <TextInput
        value={prioridad}
        style={{ paddingTop: 10 }}
        placeholder="Fecha límite"
        OnChangeText={prioridadHandle}
      />

      <Button title="Añadir Tarea" onPress={() => validarDatos()} />
    </View>
  );
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

export default AddData;
