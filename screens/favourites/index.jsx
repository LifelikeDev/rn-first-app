import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../../context";

export default function Favourites() {
  const { favouriteItems } = useContext(Context);

  if (!favouriteItems.length) {
    return (
      <View style={styles.noFavourites}>
        <Text style={styles.noFavouritesText}>No Favourite Items</Text>
      </View>
    );
  }

  return (
    <View>
      {favouriteItems.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  noFavourites: {
    alignItems: "center",
    padding: 20,
  },
  noFavouritesText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
