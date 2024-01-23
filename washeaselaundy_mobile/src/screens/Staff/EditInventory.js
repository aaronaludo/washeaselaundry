import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/Form";
import axios from "axios";

const EditInventory = ({ navigation, route }) => {
  const { inventory_id } = route.params;
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("staffToken");

        const response = await axios.get(
          `${"http://192.168.1.5:8000"}/api/staffs/inventories/${inventory_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setName(response.data.inventory.name);
        setQuantity(response.data.inventory.quantity);
        setType(response.data.inventory.type);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = async () => {
    try {
      const token = await AsyncStorage.getItem("staffToken");

      const response = await axios.put(
        `${"http://192.168.1.5:8000"}/api/staffs/inventories/${inventory_id}`,
        {
          name: name,
          quantity: quantity,
          type: type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(response.data);

      navigation.navigate("Staff Inventory", {
        result: response.data.message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Edit Inventory</Text>
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
          placeholder="Enter type"
          value={type}
          onChangeText={(text) => setType(text)}
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleEdit}>
          <Text style={styles.inputButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditInventory;
