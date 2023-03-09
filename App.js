import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

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

  console.log(list);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          margin: 30,
          fontWeight: 500,
          fontStyle: "italic",
        }}
      >
        Hello React Native
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

          <Button onPress={handleOnPressButton} title="Add Note" />
        </View>

        {/* List */}

        <View style={styles.listContainer}>
          {list.map((el, idx) => (
            <Text
              key={`note: ${idx}`}
              style={styles.listItem}
              onPress={() => handleItemDelete(idx)}
            >
              {el}
            </Text>
          ))}
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
    padding: 10,
    paddingBottom: 30,
    flexDirection: "row",
    gap: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  listContainer: {
    paddingTop: 30,
  },
  listItem: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "#282872",
    padding: 10,
    marginBottom: 20,
    color: "white",
    fontSize: 20,
  },
});
