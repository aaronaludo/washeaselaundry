import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/Form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";

const EditTransactionItem = ({ route, navigation }) => {
  const { machine_id } = route.params;
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Pending", value: "1" },
    { label: "Processing", value: "2" },
    { label: "Ready to Pickup", value: "3" },
    { label: "Delivered", value: "4" },
    { label: "Cancelled", value: "5" },
    { label: "Successful", value: "6" },
  ]);

  // console.log(machine_id);
  const handleEdit = async () => {
    try {
      const token = await AsyncStorage.getItem("staffToken");

      const response = await axios.put(
        `http://192.168.1.2:8000/api/staffs/transactions/edit_machine_status/${machine_id}`,
        {
          status_id: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(response);
      navigation.navigate("Staff Tab Navigator");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Select Machine Status</Text>
        <Text style={styles.description}></Text>
        <DropDownPicker
          open={open}
          value={status}
          items={items}
          setOpen={setOpen}
          setValue={setStatus}
          setItems={setItems}
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleEdit}>
          <Text style={styles.inputButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditTransactionItem;
