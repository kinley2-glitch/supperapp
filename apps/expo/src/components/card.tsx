/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const CardItem = () => {
  const products = [
    { name: "Acer", status: "live", username: "karama" },
    { name: "Dell", status: "upcoming", username: "tim" },
    { name: "3" },
  ];

  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const onPress = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  return (
    <View>
      <View className="pt-6">
        {
          <FlatList
            data={products}
            renderItem={({ item, index }) => (
              <View className="mt-2 ml-1 mr-0.5 box-border h-52 w-44 rounded-xl border-opacity-25 p-4 shadow-sm md:my-2">
                <View className="h-28 w-44">
                  <Image
                    source={require("../../assets/Images/dell.jpg")}
                    className="h-28 w-36 object-scale-down "
                  />
                </View>

                <Text>{item.name}</Text>
                <Text>{item.status}</Text>
                <Text>{item.username}</Text>

                <View className="items-end">
                  <TouchableOpacity onPress={() => onPress(index)}>
                    <AntDesign
                      name="heart"
                      color={selectedIndices.includes(index) ? "red" : "black"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            numColumns={2}
            key={2}
          />
        }
      </View>
    </View>
  );
};
