import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/Form";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";

const Checkout = ({ route, navigation }) => {
  const { shop_admin_id } = route.params;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [specialInstruction, setSpecialInstruction] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Select a payment method", value: "" },
    { label: "Cash", value: "1" },
    { label: "Gcash", value: "2" },
  ]);

  const handleCheckout = async () => {
    try {
      const token = await AsyncStorage.getItem("customerToken");

      const response = await axios.post(
        "http://192.168.1.2:8000/api/customers/transactions/add",
        {
          shop_admin_id: shop_admin_id,
          name: name,
          address: address,
          date: date,
          time: time,
          special_instruction: specialInstruction,
          payment_method_id: paymentMethod,
          payment_screenshot: paymentScreenshot,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigation.navigate("User Tab Navigator");
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Checkout</Text>
        <Text style={styles.description}></Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter date"
          value={date}
          onChangeText={(text) => setDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter time"
          value={time}
          onChangeText={(text) => setTime(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter special instruction"
          value={specialInstruction}
          onChangeText={(text) => setSpecialInstruction(text)}
        />
        <DropDownPicker
          open={open}
          value={paymentMethod}
          items={items}
          setOpen={setOpen}
          setValue={setPaymentMethod}
          setItems={setItems}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter payment screenshot"
          value={paymentScreenshot}
          onChangeText={(text) => setPaymentScreenshot(text)}
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleCheckout}>
          <Text style={styles.inputButtonText}>Confirm Information</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Checkout;
