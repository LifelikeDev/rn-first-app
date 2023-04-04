import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
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
  const [reason, setReason] = useState("");

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

  // handle reason add
  const handleInputChange = (e) => {
    setReason(e.target.value);
  };

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
            <TextInput
              placeholder="Why Do You Like This Product?"
              onChange={handleInputChange}
              value={reason}
              style={styles.reasonInput}
            />

            <View style={styles.buttonWrapper}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
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
    borderRadius: 4,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
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
  reasonInput: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },
});
