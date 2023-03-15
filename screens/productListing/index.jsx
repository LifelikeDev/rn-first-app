import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { Context } from "../../context";

export default function ProductListing() {
  const { loading, products } = useContext(Context);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#282872" />
    );
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
        keyExtractor={(itemData) => itemData.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
