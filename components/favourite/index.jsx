import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FavouriteItem({ title, reason }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.title, styles.reason]}>{reason}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282872",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  reason: {
    fontWeight: "normal",
    fontSize: 16,
  },
});
