import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ProductListItem({ title, onPress, bgColor }) {
  return (
    <View style={styles.productItemOuterContainer}>
      <Pressable
        android_ripple={{ color: "#cecece" }}
        style={{ ...styles.pressableView, backgroundColor: bgColor }}
        onPress={onPress}
      >
        <View style={styles.productItemInnerContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  productItemOuterContainer: {
    flex: 1,
    margin: 16,
    height: 160,
    borderRadius: 8,
  },
  pressableView: {
    flex: 1,
  },
  productItemInnerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
