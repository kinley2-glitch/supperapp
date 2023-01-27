import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { CardItem } from "../../components/card";
import { Feather } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";

export const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <View className="flex-1 bg-white">
      <View className="ml-4 mt-10">
        <Feather name="menu" size={20} color="black" />
      </View>

      <Text className="mt-2 ml-4 text-left text-xl">Hi Kinley</Text>
      <Searchbar
        className="ml-4 mt-2 h-[40px] w-[360px] bg-white"
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        elevation={1}
      />

      <View className="mt-5">
        <Text className="ml-4 text-xl">Discover items near you</Text>
        <View className="mt-2 ml-4 mr-60 flex flex-row justify-between">
          <TouchableOpacity className="items-center justify-center rounded-sm bg-[#2196F3] px-2">
            <Text className="text-white" onPress={() => Alert.alert("Auction")}>
              Auction
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center justify-center rounded-sm bg-[#2196F3] px-2 py-1">
            <Text className="text-white" onPress={() => Alert.alert("Product")}>
              Product
            </Text>
          </TouchableOpacity>
        </View>

        {/* Display the selected card */}
        <CardItem />
      </View>
    </View>
  );
};
