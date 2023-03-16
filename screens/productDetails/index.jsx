import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

export default function ProductDetails() {
  const {
    params: { productId },
  } = useRoute();

  const [loading, setLoading] = useState(false);
  const [productDetailsData, setProductDetailsData] = useState([]);

  useEffect(() => {
    setLoading(true);

    const fetchProductDetails = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();

      if (data) {
        setLoading(false);
        setProductDetailsData(data);
      }
    };

    fetchProductDetails();
  }, []);

  console.log(productDetailsData);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#282872" />
    );
  }

  return (
    <View>
      <Text>ProductDetails</Text>
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
