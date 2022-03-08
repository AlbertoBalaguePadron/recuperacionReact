import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
import AddData from "./components/AddData";

export default function App() {
  const [tareas, setTareas] = useState([]);

  const addTarea = (tareas) => {};

  return (
    <View style={styles.container}>
      <View style={styles.borderTop}>
        <Card>
          <Header title="Lista de Tareas" />
        </Card>

        <AddData addItems={addTarea} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#E0E2FF",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 2,
    height: "50%",
  },
  borderTop: {
    paddingTop: 30,
  },
});
