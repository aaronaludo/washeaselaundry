import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/profile.jpg")}
          style={styles.image}
        />
        <Text style={styles.title}>Super Admin</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Super Admin Account Information")}
        >
          <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="user"
                size={24}
                color="black"
                style={{ marginRight: 30, color: "#0d6efd" }}
              />
              <Text style={styles.buttonText}>Account Information</Text>
            </View>
            <Feather name="arrow-right-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Super Admin Change Password")}
        >
          <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="unlock"
                size={24}
                color="black"
                style={{ marginRight: 30, color: "#0d6efd" }}
              />
              <Text style={styles.buttonText}>Change Password</Text>
            </View>
            <Feather name="arrow-right-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Super Admin Login")}
        >
          <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="chevrons-left"
                size={24}
                color="black"
                style={{ marginRight: 30, color: "#0d6efd" }}
              />
              <Text style={styles.buttonText}>Logout</Text>
            </View>
            <Feather name="arrow-right-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#0d6efd",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    // alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    width: "100%",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
