import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
import AddData from "./components/AddData";
import Item from "./components/Item";

export default function App() {
  const [tareas, setTareas] = useState([]);

  const addTarea = (tareas) => {
    setTareas((currentTareas) => [
      ...currentTareas,
      {
        key: Math.random().toString(),
        nombre: tareas.nombre,
        fecha: tareas.fecha,
        prioridad: tareas.prioridad,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.borderTop}>
        <Card>
          <Header title="Lista de Tareas" />
        </Card>
        <View style={styles.container}>
          <AddData addItems={addTarea} />
        </View>

        <View style={styles.container}>
          <FlatList
            data={tareas}
            renderItem={(itemData) => {
              return <Item itemData={itemData.item} />;
            }}
          />
        </View>
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
