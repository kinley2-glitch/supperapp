import React from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { AuctionScreen } from "./myauction";
import { Icon } from "react-native-elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Reviews } from "./reviews";

const Tab = createMaterialTopTabNavigator();

function Tab1() {
  return <AuctionScreen />;
}

function Tab2() {
  return <Reviews />;
}

export const Profile = () => {
  const name = "Full Name";
  const username = "user_name";

  return (
    <View className=" mt-5 flex-auto p-1">
      <View className=" h-32 border-spacing-1 bg-rose-400"></View>

      <View className=" flex-row">
        <View className=" border-1 mx-2 -mt-14 h-28 w-28 rounded-full bg-black" />

        <View className="ml-48">
          <Icon name="share-alt" type="font-awesome" size={24} color="#000" />
        </View>

        <View className=" ml-2">
          <Icon name="cog" type="font-awesome" size={24} color="#000" />
        </View>
      </View>

      <View className=" ml-4">
        <View className=" w-36 items-start pt-4">
          <Text>{name}</Text>
          <Text className=" font-light">@{username}</Text>
        </View>

        <View className="mt-2 mb-5 flex-row">
          <Icon name="star" type="font-awesome" size={15} />

          <Icon name="star" type="font-awesome" size={15} />

          <Icon name="star-half-o" type="font-awesome" size={15} />

          <Icon name="star-o" type="font-awesome" size={15} />

          <Icon name="star-o" type="font-awesome" size={15} />

          <Text className=" ml-3 font-light"> Member since year</Text>
        </View>
      </View>

      <View className=" flex-1">
        <Tab.Navigator>
          <Tab.Screen name="Auction" component={Tab1} />
          <Tab.Screen name="Reviews" component={Tab2} />
        </Tab.Navigator>
      </View>
    </View>
  );
};
