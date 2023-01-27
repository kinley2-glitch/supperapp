import React from "react";
import { View, Text } from "react-native";
import { CardItem } from "../../components/card";

export const Favorite = () => {
  return (
    <View className="flex-1 bg-white">
      <Text className="text-black mt-12 ml-3 text-2xl">Trending</Text>
      <CardItem/>
    </View>
  );
};
