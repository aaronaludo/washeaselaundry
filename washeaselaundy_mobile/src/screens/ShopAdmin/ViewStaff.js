import React, { useState, useEffect } from "react";
import { styles } from "../../styles/Box";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ViewStaff = ({ route }) => {
  const { staff_id } = route.params;
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [address, setAddress] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  const [staff, setStaff] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("shopAdminToken");

        const response = await axios.get(
          `http://192.168.1.2:8000/api/shop_admins/staffs/${staff_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStaff(response.data.staff);
        // setFirstName(response.data.staff.first_name);
        // setLastName(response.data.staff.last_name);
        // setAddress(response.data.staff.address);
        // setPhoneNumber(response.data.staff.phone_number);
        // setEmail(response.data.staff.email);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // console.log(staff_id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {staff.first_name + " " + staff.last_name}
      </Text>
      <Text style={styles.description}>{staff.address}</Text>
      <Text style={styles.description}>{staff.phone_number}</Text>
      <Text style={styles.description}>{staff.email}</Text>
    </View>
  );
};

export default ViewStaff;
