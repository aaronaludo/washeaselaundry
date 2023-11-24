import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PickRole from "./src/screens/PickRole";

import UserTabNavigator from "./src/navigator/UserTabNavigator";
import UserLogin from "./src/screens/User/Login";
import UserRegistration from "./src/screens/User/Registration";
import UserDashboard from "./src/screens/User/Dashboard";
import UserAccount from "./src/screens/User/Account";
import UserChangePassword from "./src/screens/User/ChangePassword";
import UserAccountInformation from "./src/screens/User/AccountInformation";
import UserNotification from "./src/screens/User/Notification";

import RiderTabNavigator from "./src/navigator/RiderTabNavigator";
import RiderLogin from "./src/screens/Rider/Login";
import RiderDashboard from "./src/screens/Rider/Dashboard";
import RiderAccount from "./src/screens/Rider/Account";
import RiderChangePassword from "./src/screens/Rider/ChangePassword";
import RiderAccountInformation from "./src/screens/Rider/AccountInformation";
import RiderNotification from "./src/screens/Rider/Notification";

import StaffTabNavigator from "./src/navigator/StaffTabNavigator";
import StaffLogin from "./src/screens/Staff/Login";
import StaffDashboard from "./src/screens/Staff/Dashboard";
import StaffAccount from "./src/screens/Staff/Account";
import StaffChangePassword from "./src/screens/Staff/ChangePassword";
import StaffAccountInformation from "./src/screens/Staff/AccountInformation";
import StaffNotification from "./src/screens/Staff/Notification";
import StaffInventory from "./src/screens/Staff/Inventory";
import StaffSelfService from "./src/screens/Staff/SelfService";
import StaffDropoffDelivery from "./src/screens/Staff/DropoffDelivery";
import StaffPickDelivery from "./src/screens/Staff/PickupDelivery";
import StaffAddInventory from "./src/screens/Staff/AddInventory";
import StaffAddDropoffDelivery from "./src/screens/Staff/AddDropoffDelivery";
import StaffAddSelfService from "./src/screens/Staff/AddSelfService";
import StaffAddPickupDelivery from "./src/screens/Staff/AddPickupDelivery";

import ShopAdminTabNavigator from "./src/navigator/ShopAdminTabNavigator";
import ShopAdminLogin from "./src/screens/ShopAdmin/Login";
import ShopAdminRegistration from "./src/screens/ShopAdmin/Registration";
import ShopAdminDashboard from "./src/screens/ShopAdmin/Dashboard";
import ShopAdminAccount from "./src/screens/ShopAdmin/Account";
import ShopAdminChangePassword from "./src/screens/ShopAdmin/ChangePassword";
import ShopAdminAccountInformation from "./src/screens/ShopAdmin/AccountInformation";
import ShopAdminNotification from "./src/screens/ShopAdmin/Notification";
import ShopAdminRiders from "./src/screens/ShopAdmin/Riders";
import ShopAdminMachines from "./src/screens/ShopAdmin/Machines";
import ShopAdminStaffs from "./src/screens/ShopAdmin/Staffs";
import ShopAdminLaundryServices from "./src/screens/ShopAdmin/LaundryServices";
import ShopAdminAddRider from "./src/screens/ShopAdmin/AddRider";
import ShopAdminAddStaff from "./src/screens/ShopAdmin/AddStaff";
import ShopAdminAddMachine from "./src/screens/ShopAdmin/AddMachine";
import ShopAdminAddLaundryService from "./src/screens/ShopAdmin/AddLaundryService";
import ShopAdminSubscription from "./src/screens/ShopAdmin/Subscription";

import SuperAdminTabNavigator from "./src/navigator/SuperAdminTabNavigator";
import SuperAdminLogin from "./src/screens/SuperAdmin/Login";
import SuperAdminDashboard from "./src/screens/SuperAdmin/Dashboard";
import SuperAdminAccount from "./src/screens/SuperAdmin/Account";
import SuperAdminChangePassword from "./src/screens/SuperAdmin/ChangePassword";
import SuperAdminAccountInformation from "./src/screens/SuperAdmin/AccountInformation";
import SuperAdminNotification from "./src/screens/SuperAdmin/Notification";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pick Role"
          component={PickRole}
          options={{ headerShown: false }}
        />
        {/* User */}
        <Stack.Screen
          name="User Tab Navigator"
          component={UserTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="User Login" component={UserLogin} />
        <Stack.Screen name="User Registration" component={UserRegistration} />
        <Stack.Screen name="User Dashboard" component={UserDashboard} />
        <Stack.Screen name="User Account" component={UserAccount} />
        <Stack.Screen
          name="User Change Password"
          component={UserChangePassword}
        />
        <Stack.Screen
          name="User Account Information"
          component={UserAccountInformation}
        />
        <Stack.Screen name="User Notification" component={UserNotification} />
        {/* Rider */}
        <Stack.Screen
          name="Rider Tab Navigator"
          component={RiderTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Rider Login" component={RiderLogin} />
        <Stack.Screen name="Rider Dashboard" component={RiderDashboard} />
        <Stack.Screen name="Rider Account" component={RiderAccount} />
        <Stack.Screen
          name="Rider Change Password"
          component={RiderChangePassword}
        />
        <Stack.Screen
          name="Rider Account Information"
          component={RiderAccountInformation}
        />
        <Stack.Screen name="Rider Notification" component={RiderNotification} />
        {/* Staff */}
        <Stack.Screen
          name="Staff Tab Navigator"
          component={StaffTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Staff Login" component={StaffLogin} />
        <Stack.Screen name="Staff Dashboard" component={StaffDashboard} />
        <Stack.Screen name="Staff Account" component={StaffAccount} />
        <Stack.Screen
          name="Staff Change Password"
          component={StaffChangePassword}
        />
        <Stack.Screen
          name="Staff Account Information"
          component={StaffAccountInformation}
        />
        <Stack.Screen name="Staff Notification" component={StaffNotification} />
        <Stack.Screen name="Staff Inventory" component={StaffInventory} />
        <Stack.Screen
          name="Staff Pickup and Delivery"
          component={StaffPickDelivery}
        />
        <Stack.Screen name="Staff Self Service" component={StaffSelfService} />
        <Stack.Screen
          name="Staff Dropoff and Delivery"
          component={StaffDropoffDelivery}
        />
        <Stack.Screen
          name="Staff Add Dropoff and Delivery"
          component={StaffAddDropoffDelivery}
        />
        <Stack.Screen
          name="Staff Add Inventory"
          component={StaffAddInventory}
        />
        <Stack.Screen
          name="Staff Add Self Service"
          component={StaffAddSelfService}
        />
        <Stack.Screen
          name="Staff Add Pickup and Delivery"
          component={StaffAddPickupDelivery}
        />
        {/* Shop Admin */}
        <Stack.Screen
          name="Shop Admin Tab Navigator"
          component={ShopAdminTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Shop Admin Login" component={ShopAdminLogin} />
        <Stack.Screen
          name="Shop Admin Registration"
          component={ShopAdminRegistration}
        />
        <Stack.Screen
          name="Shop Admin Dashboard"
          component={ShopAdminDashboard}
        />
        <Stack.Screen name="Shop Admin Account" component={ShopAdminAccount} />
        <Stack.Screen
          name="Shop Admin Change Password"
          component={ShopAdminChangePassword}
        />
        <Stack.Screen
          name="Shop Admin Account Information"
          component={ShopAdminAccountInformation}
        />
        <Stack.Screen
          name="Shop Admin Notification"
          component={ShopAdminNotification}
        />
        <Stack.Screen name="Shop Admin Riders" component={ShopAdminRiders} />
        <Stack.Screen name="Shop Admin Staffs" component={ShopAdminStaffs} />
        <Stack.Screen
          name="Shop Admin Machines"
          component={ShopAdminMachines}
        />
        <Stack.Screen
          name="Shop Admin Laundry Services"
          component={ShopAdminLaundryServices}
        />
        <Stack.Screen
          name="Shop Admin Add Rider"
          component={ShopAdminAddRider}
        />
        <Stack.Screen
          name="Shop Admin Add Staff"
          component={ShopAdminAddStaff}
        />
        <Stack.Screen
          name="Shop Admin Add Machine"
          component={ShopAdminAddMachine}
        />
        <Stack.Screen
          name="Shop Admin Add Laundry Service"
          component={ShopAdminAddLaundryService}
        />
        <Stack.Screen
          name="Shop Admin Subscription"
          component={ShopAdminSubscription}
        />
        {/* Super Admin */}
        <Stack.Screen
          name="Super Admin Tab Navigator"
          component={SuperAdminTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Super Admin Login" component={SuperAdminLogin} />
        <Stack.Screen
          name="Super Admin Dashboard"
          component={SuperAdminDashboard}
        />
        <Stack.Screen
          name="Super Admin Account"
          component={SuperAdminAccount}
        />
        <Stack.Screen
          name="Super Admin Change Password"
          component={SuperAdminChangePassword}
        />
        <Stack.Screen
          name="Super Admin Account Information"
          component={SuperAdminAccountInformation}
        />
        <Stack.Screen
          name="Super Admin Notification"
          component={SuperAdminNotification}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
