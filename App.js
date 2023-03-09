import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import ApiCallComp from "./components/apiCall";

export default function App() {
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);

  const handleOnChangeText = (enteredText) => {
    setNote(enteredText);
  };

  const handleOnPressButton = () => {
    setList((prevNotes) => [...prevNotes, note]);
    setNote("");
  };

  const handleItemDelete = (selectedItemIndex) => {
    const filtered = list.filter((_, id) => id !== selectedItemIndex);
    setList(filtered);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          margin: 30,
          fontWeight: 600,
          fontStyle: "italic",
        }}
      >
        Note Tracker
      </Text>

      {/* Input Form */}

      <View style={{ width: 300 }}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Your Note Here"
            style={styles.input}
            value={note}
            onChangeText={handleOnChangeText}
          />

          <Pressable onPress={handleOnPressButton} style={styles.button}>
            <Text style={{ color: "#fff" }}>Add Note</Text>
          </Pressable>
        </View>

        {/* List View */}

        {/* <View style={styles.listContainer}>
          <FlatList
            data={list}
            renderItem={(itemData) => (
              <Pressable onPress={() => handleItemDelete(itemData.index)}>
                <Text key={`note: ${itemData.index}`} style={styles.listItem}>
                  {itemData.item}
                </Text>
              </Pressable>
            )}
          />
        </View> */}

        {/* Api Call Component */}
        <View style={styles.listContainer}>
          <ApiCallComp />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 120,
  },
  nestedContainer: {
    backgroundColor: "#bbb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 200,
  },
  inputContainer: {
    paddingVertical: 15,
    flexDirection: "row",
    gap: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: "#282872",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  listContainer: {
    paddingTop: 30,
    marginBottom: 50,
  },
  listItem: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "#282872",
    padding: 10,
    marginVertical: 10,
    color: "white",
    fontSize: 17,
  },
});
