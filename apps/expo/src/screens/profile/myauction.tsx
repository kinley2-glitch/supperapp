import { ScrollView, Text, View, Image, FlatList } from "react-native";
import { Icon } from "react-native-elements";

export const AuctionScreen = () => {
  const products = [
    { name: "Name", price: "price", status: "status", duration: "duration" },
    { name: "Name", price: "price", status: "status", duration: "duration" },
    { name: "Name", price: "price", status: "status", duration: "duration" },
    { name: "Name", price: "price", status: "status", duration: "duration" },
    { name: "Name", price: "price", status: "status", duration: "duration" },
    { name: "Name", price: "price", status: "status", duration: "duration" },
    { name: "Name", price: "price", status: "status", duration: "duration" },
  ];

  return (
    <View className=" m-1 flex-auto items-start p-2">
      <View className=" my-2 flex-row">
        <Text className=" mr-2">Sort by</Text>
        <Icon name="sort" type="font-awesome" size={20} color="#000" />
      </View>

      <View>
        {
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => (
              <View className="mt-2 ml-1 mr-0.5 box-border h-52 w-44 justify-around rounded-xl border-gray-300 border-opacity-25 p-4 shadow-md">
                <View className="h-28 w-44">
                  <Image
                    source={require("../../../assets/icon.png")}
                    className="h-28 w-28 object-scale-down"
                  />
                </View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{item.status}</Text>
                <Text>{item.duration}</Text>
              </View>
            )}
          />
        }
      </View>
    </View>
  );
};
