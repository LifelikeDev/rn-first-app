import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, Modal, Pressable } from "react-native";
import { ActivityIndicator } from "react-native";
import ProductDetailsItem from "../../components/productDetails";

export default function ProductDetails() {
  const {
    params: { productId },
  } = useRoute();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [productDetailsData, setProductDetailsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
        return (
          <Button
            onPress={() => setModalVisible(true)}
            color="#282872"
            title="Add Favourites"
          />
        );
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
