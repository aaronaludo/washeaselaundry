import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/Form";
import axios from "axios";

const AddCartItems = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [transactionModeId, setTransactionModeId] = useState(
    route.params.transaction_mode_id == null
      ? null
      : route.params.transaction_mode_id
  );
  const [shopAdminId, setShopAdminId] = useState(
    route.params.shop_admin_id == null ? null : route.params.shop_admin_id
  );
  const [serviceId, setServiceId] = useState(
    route.params.service_id == null ? null : route.params.service_id
  );
  const [additionalServiceId, setAdditionalServiceId] = useState(
    route.params.additional_service_id == null
      ? null
      : route.params.additional_service_id
  );

  const {
    transaction_mode_id,
    shop_admin_id,
    service_id,
    additional_service_id,
  } = route.params;

  console.log(
    transaction_mode_id,
    shop_admin_id,
    service_id,
    additional_service_id
  );
  const handleAddItem = async () => {
    try {
      const token = await AsyncStorage.getItem("customerToken");

      const response = await axios.post(
        "http://192.168.1.2:8000/api/customers/cart/add",
        {
          name: name,
          quantity: quantity,
          weight: weight,
          transaction_mode_id: transactionModeId,
          shop_admin_id: shopAdminId,
          service_id: serviceId,
          additional_service_id: additionalServiceId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName("");
      setQuantity("");
      setWeight("");

      navigation.navigate("User Cart", {
        service_id: serviceId,
        transaction_mode_id: transactionModeId,
        shop_admin_id: shopAdminId,
        additional_service_id: additionalServiceId,
        result: response.data.message,
      });
    } catch (error) {
      setName("");
      setQuantity("");
      setWeight("");
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Add Cart Item</Text>
        <Text style={styles.description}></Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter quantity"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter weight"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleAddItem}>
          <Text style={styles.inputButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddCartItems;
