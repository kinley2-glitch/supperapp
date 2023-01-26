import React from "react";
import { View, Text, ScrollView } from "react-native";
import { CardItem } from "../../components/card";
import { Feather } from "@expo/vector-icons";

export const Home = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="ml-4 mt-10">
        <Feather name="menu" size={24} color="black" />
      </View>
      <Text className="mt-2 ml-4 text-left text-xl font-bold">Hi Kinley</Text>
      <View className="mt-5">
        <Text className="ml-4 text-base font-bold">Discover items</Text>
        <ScrollView className="ml-4 mr-4 bg-blue-200">
          <CardItem />
          <CardItem />
        </ScrollView>
      </View>
    </View>
  );
};
