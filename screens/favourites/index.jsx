import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FavouriteItem from "../../components/favourite";
import { Context } from "../../context";

export default function Favourites() {
  const { favouriteItems, handleRemove } = useContext(Context);

  if (!favouriteItems.length) {
    return (
      <View style={styles.noFavourites}>
        <Text style={styles.noFavouritesText}>No Favourite Items</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={favouriteItems}
        renderItem={({ item }) => (
          <FavouriteItem
            title={item.title}
            reason={item.reason}
            productId={item.id}
            handleRemove={handleRemove}
          />
        )}
        keyExtractor={(itemData) => itemData.id}
      />
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
