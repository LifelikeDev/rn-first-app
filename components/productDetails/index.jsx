import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProductDetailsItem({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Title: {data.title}</Text>
      <Text style={styles.textStyle}>Description: {data.description}</Text>
      <Text style={styles.textStyle}>Price: ${data.price}</Text>
      <Text style={styles.textStyle}>Rating: {data.rating}</Text>
      <Text style={styles.textStyle}>Category: {data.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#88da9e",
    margin: 10,
    padding: 30,
    paddingHorizontal: 15,
  },
  textStyle: {
    color: "#fff",
    fontSize: 20,
    paddingBottom: 12,
  },
});
