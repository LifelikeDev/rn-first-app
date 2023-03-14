import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductListing from "./screens/productListing";
import Favourites from "./screens/favourites";
import ProductDetails from "./screens/productDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductListing />
      <Favourites />
      <ProductDetails />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
