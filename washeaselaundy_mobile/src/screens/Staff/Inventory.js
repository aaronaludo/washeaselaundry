import React, { useState, useEffect } from "react";
import Box from "../../components/Box";
import { styles } from "../../styles/Box";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Inventory = ({ navigation, route }) => {
  const { result } = route.params;
  const [inventories, setInventories] = useState([]);
  const [render, setRender] = useState(null);
  // console.log(inventories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("staffToken");

        const response = await axios.get(
          "http://192.168.1.2:8000/api/staffs/inventories",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setInventories(response.data.inventories);
        // console.log(response.data.inventories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [result, render]);

  const handleDelete = async (id) => {
    try {
      const token = await AsyncStorage.getItem("staffToken");

      const response = await axios.delete(
        `http://192.168.1.2:8000/api/staffs/inventories/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRender(response);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Add Inventory"
        descriptionLabel="add more riders for the better."
        navigation={navigation}
        buttonContainer={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonTextLabel={"Add Inventory"}
        buttonNavigation={"Staff Add Inventory"}
      />
      {/* <View style={styles.container}>
        <Text style={styles.title}>Search</Text>
        <TextInput
          style={styles2.input}
          placeholder="Search by Name"
          secureTextEntry
        />
        {navigation && (
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        )}
      </View> */}
      <View style={styles2.table}>
        <View style={styles2.headerRow}>
          <Text style={styles2.headerCell}>ID</Text>
          <Text style={styles2.headerCell}>Name</Text>
          <Text style={styles2.headerCell}>Quantity</Text>
          <Text style={styles2.headerCell}>Type</Text>
          <Text style={styles2.headerCell}>Actions</Text>
        </View>
        {inventories.map((item) => (
          <View style={styles2.row} key={item.id}>
            <Text style={styles2.cell}>{item.id}</Text>
            <Text style={styles2.cell}>{item.name}</Text>
            <Text style={styles2.cell}>{item.quantity}</Text>
            <Text style={styles2.cell}>{item.type}</Text>
            <View style={styles2.cell}>
              <TouchableOpacity
                style={styles2.button}
                onPress={() =>
                  navigation.navigate("Staff View Inventory", {
                    inventory_id: item.id,
                  })
                }
              >
                <Text style={styles2.buttonText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles2.button}
                onPress={() =>
                  navigation.navigate("Staff Edit Inventory", {
                    inventory_id: item.id,
                  })
                }
              >
                <Text style={styles2.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles2.button}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles2.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles2 = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    borderWidth: 1,
    borderBlockColor: "#d0d4dc",
  },
  table: {
    backgroundColor: "#fff",
    borderRadius: 10,
    // margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    padding: 10,
    backgroundColor: "#fffcfc",
  },
  row: {
    flexDirection: "row",
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
  },
  cell: {
    flex: 1,
  },
  button: {
    marginBottom: 6,
    backgroundColor: "#3498db",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Inventory;
