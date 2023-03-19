import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import { ActivityIndicator } from "react-native";
import ProductDetailsItem from "../../components/productDetails";

export default function ProductDetails() {
  const {
    params: { productId },
  } = useRoute();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [productDetailsData, setProductDetailsData] = useState([]);

  // handle data fetch
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

  // handle adding favourites
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button color="#282872" title="Add Favourites" />;
      },
    });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#282872" />
    );
  }

  return (
    <View>
      <ProductDetailsItem data={productDetailsData} />
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
