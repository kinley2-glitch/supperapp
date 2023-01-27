import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import { Icon } from "react-native-elements";

export const Reviews = () => {
  const review = [
    {
      Name: "Name",
      Buyer_Seller: "Buyer",
      rate: "rating",
      Date: "date",
      comments: "comments",
    },
    {
      Name: "Name",
      Buyer_Seller: "Buyer",
      rate: "rating",
      Date: "date",
      comments: "comments",
    },
  ];

  return (
    <View>
      {
        <FlatList
          data={review}
          renderItem={({ item }) => (
            <View className=" m-0.5">
              <View className=" h-16 flex-auto bg-slate-200 p-2">
                <View className=" flex-row">
                  <View className=" mr-4 h-10 w-10 rounded-full bg-red-700">
                    <Image
                      source={require("../../../assets/icon.png")}
                      className="h-10 w-10 rounded-full object-scale-down"
                    />
                  </View>
                  <Text>{item.Name}</Text>
                  <Text className=" mx-3 font-thin">({item.Buyer_Seller})</Text>
                  <Icon name="star" type="font-awesome" size={15} />
                  <Icon name="star" type="font-awesome" size={15} />
                  <Icon name="star" type="font-awesome" size={15} />
                  <Icon name="star-o" type="font-awesome" size={15} />
                  <Icon name="star-o" type="font-awesome" size={15} />
                  <Text className=" mx-3">{item.Date}</Text>
                </View>

                <View className=" -m-5 ml-14">
                  <Text>{item.comments}</Text>
                </View>
              </View>
            </View>
          )}
        />
      }
    </View>
  );
};
