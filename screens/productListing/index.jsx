import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductListItem from "../../components/productList";
import { Context } from "../../context";

function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const rand = Math.floor(Math.random() * 16);
    color += letters[rand];
  }

  return color;
}

export default function ProductListing() {
  const { loading, products } = useContext(Context);
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("productDetails");
  };

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#282872" />
    );
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductListItem
            title={itemData.item.title}
            bgColor={generateRandomColor()}
            onPress={handleOnPress}
          />
        )}
        keyExtractor={(itemData) => itemData.id}
        numColumns={2}
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
